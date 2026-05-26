import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import wbt_image_1 from "../assets/images/wbt_image_1.jpg";
import wbt_image_2 from "../assets/images/wbt_image_2.jpg";
import wbt_image_3 from "../assets/images/wbt_image_3.jpg";
import wbt_image_4 from "../assets/images/wbt_image_4.jpg";
import wbt_image_5 from "../assets/images/wbt_image_5.jpg";
import wbt_image_6 from "../assets/images/wbt_image_6.jpeg";
import wbt_image_7 from "../assets/images/wbt_image_7.jpg";
import wbt_image_8 from "../assets/images/wbt_image_8.jpg";
import wbt_image_9 from "../assets/images/wbt_image_9.jpg";
import wbt_image_10 from "../assets/images/wbt_image_10.jpg";
import wbt_image_11 from "../assets/images/wbt_image_11.jpg";
import wbt_image_12 from "../assets/images/wbt_image_12.jpg";

const cars = [
  { img: wbt_image_1, title: "Spyker C8 Aileron", span: "md:col-span-2 md:row-span-2" },
  { img: wbt_image_2, title: "Spyker C8 Aileron (Top View)", span: "md:col-span-1 md:row-span-1" },
  { img: wbt_image_3, title: "Spyker C8 Aileron (Front Track)", span: "md:col-span-1 md:row-span-2" },
  { img: wbt_image_4, title: "Spyker C8 Aileron (Wheel Detail)", span: "md:col-span-1 md:row-span-1" },
  { img: wbt_image_5, title: "Mercedes-Benz SL73 AMG (R129)", span: "md:col-span-2 md:row-span-1" },
  { img: wbt_image_6, title: "Mercedes-Benz SL73 AMG (R129)", span: "md:col-span-1 md:row-span-1" },
  { img: wbt_image_7, title: "Honda Civic Si (Coupe)", span: "md:col-span-1 md:row-span-1" },
  { img: wbt_image_8, title: "Ferrari Dino 246 GT & Porsche 930 Slantnose", span: "md:col-span-2 md:row-span-1" },
  { img: wbt_image_9, title: "Porsche 911 Turbo (930 Slantnose)", span: "md:col-span-1 md:row-span-1" },
  { img: wbt_image_10, title: "Ferrari Dino 246 GT", span: "md:col-span-1 md:row-span-1" },
  { img: wbt_image_11, title: "Ferrari Testarossa", span: "md:col-span-1 md:row-span-2" },
  { img: wbt_image_12, title: "Classic Sports Cars Lineup", span: "md:col-span-1 md:row-span-1" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((prev) => prev === null ? null : (prev + 1) % cars.length);
      if (e.key === "ArrowLeft") setLightbox((prev) => prev === null ? null : (prev - 1 + cars.length) % cars.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background mt-6 pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6">The Collection</h1>
          <p className="text-foreground/60 uppercase tracking-widest text-sm">Art objects on display</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6">
          {cars.map((car, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              className={`relative group overflow-hidden bg-muted cursor-pointer ${car.span}`}
              onClick={() => setLightbox(i)}
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/15" />
              <img
                src={car.img}
                alt={car.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Hover label */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-serif text-2xl text-white">{car.title}</h3>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Click to view</p>
              </div>
              {/* Expand icon */}
              <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M1 1h4M1 1v4M13 1h-4M13 1v4M1 13h4M1 13v-4M13 13h-4M13 13v-4" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              Close ✕
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-white/40 text-sm font-sans tracking-widest z-10">
              {String(lightbox + 1).padStart(2, "0")} / {String(cars.length).padStart(2, "0")}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors z-10 p-4"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + cars.length) % cars.length); }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 4L8 14l10 10" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full mx-16 md:mx-24 flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={cars[lightbox].img.replace("w=1000", "w=1600").replace("w=1400", "w=1600")}
                alt={cars[lightbox].title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="flex items-center justify-between px-1">
                <h3 className="font-serif text-xl text-white/90">{cars[lightbox].title}</h3>
                <span className="text-white/30 text-xs uppercase tracking-widest">WBT Garage — Private Collection</span>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors z-10 p-4"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % cars.length); }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 4l10 10-10 10" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
