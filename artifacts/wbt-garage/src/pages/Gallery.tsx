import { motion } from "framer-motion";

const cars = [
  { img: "https://images.unsplash.com/photo-1566367576585-051277d52997?auto=format&fit=crop&q=80&w=1000", title: "Porsche 911 Classic", span: "md:col-span-2 md:row-span-2" },
  { img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1000", title: "Ferrari 930", span: "md:col-span-1 md:row-span-1" },
  { img: "https://images.unsplash.com/photo-1611821064430-0d40221e4e03?auto=format&fit=crop&q=80&w=1000", title: "Midnight Cruiser", span: "md:col-span-1 md:row-span-2" },
  { img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000", title: "Jaguar E-Type", span: "md:col-span-1 md:row-span-1" },
  { img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000", title: "Lamborghini Testarossa", span: "md:col-span-2 md:row-span-1" },
  { img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000", title: "Aston Martin Vintage", span: "md:col-span-1 md:row-span-1" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
              className={`relative group overflow-hidden bg-muted ${car.span}`}
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/10" />
              <img 
                src={car.img} 
                alt={car.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-serif text-2xl text-white">{car.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
