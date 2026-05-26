import { motion } from "framer-motion";
import { Link } from "wouter";
import wbt_image_1 from "../assets/images/wbt_image_1.jpg";
import wbt_image_8 from "../assets/images/wbt_image_8.jpg";
import wbt_image_9 from "../assets/images/wbt_image_9.jpg";
import wbt_video from "../assets/videos/wbt_video.mov";

const featuredStories = [
  {
    issue: "01",
    title: "Spyker C8 Aileron",
    category: "Heritage",
    image: wbt_image_1,
    desc: "Inside the workshop where masterpieces are reborn."
  },
  {
    issue: "02",
    title: "Ferrari Dino 246 GT & Porsche 930 Slantnose",
    category: "Restoration",
    image: wbt_image_8,
    desc: "An intimate look at the meticulous process of preserving automotive history."
  },
  {
    issue: "03",
    title: "Porsche 911 Turbo (930 Slantnose)",
    category: "Cinematic",
    image: wbt_image_9,
    desc: "When the city sleeps, the machines come alive."
  }
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black py-16 md:py-18">

        {/* Full-bleed hero video */}
        <div className="absolute inset-0 z-0">
          {/* <iframe
            src="https://www.youtube.com/embed/LbrQY7fkIQY?controls=0&showinfo=0&modestbranding=1&rel=0&autoplay=1&loop=1&playlist=LbrQY7fkIQY&mute=1&enablejsapi=1"
            title="Hero Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90 pointer-events-none"
            style={{ pointerEvents: 'none' }}
          ></iframe> */}
          <video
            autoPlay
            loop
            src={wbt_video}
            muted
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90 pointer-events-none"
          />
          {/* Left fade so text is readable */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/20 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16">

          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.3 }}
            className="max-w-full mt-8 lg:flex justify-between content-end gap-16"
          >
            <h1 className="font-serif text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-white mb-8">
              Emotional<br /><span className="text-[8rem]">Machines</span>
            </h1>
            <div>
              <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-sm font-sans">
                Exploring rare and collectible cars as cultural icons, emotional machines, and engineering masterpieces — through access to private collections and cinematic storytelling.
              </p>
              <br></br>
              <Link
                href="/media"
                className="inline-block border-b text-white border-white/20 pb-2 uppercase tracking-widest text-sm hover:border-white hover:text-white transition-colors"
              >
                Watch the Latest Episode →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="bg-neutral-900 border-y border-white/10 py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...Array(3)].map((_, repeat) => (
            <div key={repeat} className="flex items-center shrink-0">
              {["Heritage", "Restoration", "Cinematic", "Rare Finds", "Private Collections", "Engineering", "Speed & Legacy", "Collector's Edition"].map((tag, i) => (
                <span key={i} className="flex items-center gap-6 px-6">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/60 font-sans">{tag}</span>
                  <span className="text-white/30 text-lg leading-none">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Manifesto ── */}
      <section className="py-32 md:py-48 px-8 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-foreground/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-accent uppercase tracking-[0.3em] text-sm mb-12"
          >
            The Manifesto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-foreground/90"
          >
            "A high-octane editorial magazine for serious collectors. We document the world's most exclusive machines through cinematic storytelling and unbridled access."
          </motion.p>
        </div>
      </section>

      {/* ── Featured Stories — Editorial layout ── */}
      <section className="bg-[#0d0f14] py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Header row */}
          <div className="flex justify-between items-end border-b border-white/8 pb-8 mb-0">
            <h2 className="font-serif text-3xl text-white/90 tracking-tight">Featured Stories</h2>
            <Link
              href="/gallery"
              className="text-white/30 uppercase tracking-widest text-[10px] hover:text-white transition-colors"
            >
              View All →
            </Link>
          </div>

          {/* Story grid: large left + two right */}
          <div className="grid grid-cols-1 md:grid-cols-5 divide-x divide-white/8">

            {/* Left — hero story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="md:col-span-3 group cursor-pointer border-b md:border-b-0 border-white/8"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10" />
                <img
                  src={featuredStories[0].image}
                  alt={featuredStories[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  style={{ filter: 'grayscale(0.2)' }}
                />
                <span className="absolute top-6 left-6 z-20 font-serif text-white/30 text-7xl font-bold leading-none select-none">
                  {featuredStories[0].issue}
                </span>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <span className="text-white/30 uppercase tracking-[0.3em] text-[10px]">{featuredStories[0].category}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white group-hover:text-white/60 transition-colors leading-tight">
                  {featuredStories[0].title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{featuredStories[0].desc}</p>
                <span className="text-white/40 text-xs uppercase tracking-widest mt-2 group-hover:text-white transition-colors">
                  <Link href="/stories" target="_blank">Read Story → </Link>
                </span>
              </div>
            </motion.div>

            {/* Right — two stacked stories */}
            <div className="md:col-span-2 flex flex-col divide-y divide-white/8">
              {featuredStories.slice(1).map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                  className="group cursor-pointer flex flex-col flex-1"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      style={{ filter: 'grayscale(0.3)' }}
                    />
                    <span className="absolute top-4 left-4 z-20 font-serif text-white/25 text-5xl font-bold leading-none select-none">
                      {story.issue}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <span className="text-white/30 uppercase tracking-[0.3em] text-[10px]">{story.category}</span>
                    <h3 className="font-serif text-xl text-white group-hover:text-white/60 transition-colors leading-tight">
                      {story.title}
                    </h3>
                    <p className="text-white/35 text-xs leading-relaxed">{story.desc}</p>
                    <span className="text-white/30 text-xs uppercase tracking-widest mt-auto group-hover:text-white transition-colors">
                      <Link href="/stories" target="_blank">
                        Read Story →
                      </Link>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Recent Media Preview ── */}
      <section className="py-32 px-8 bg-background relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video bg-muted overflow-hidden"
            >
              <iframe
                src="https://www.youtube.com/embed/BNN7UwM6fbg?modestbranding=1&rel=0`"
                alt="Video preview"
                className="w-full h-full object-cover">
              </iframe>
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                </div>
              </div> */}
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-accent uppercase tracking-[0.3em] text-sm">Latest Episode</h2>
            <h3 className="font-serif text-4xl md:text-6xl">Spyker C8 Aileron on Terramar</h3>
            <p className="text-foreground/60 leading-relaxed text-lg">
              In the very first episode of WBT Garage, Volodymyr Nosov explores one of the rarest hand-built supercars ever made — the Spyker C8 Aileron — on the legendary Terramar circuit.
            </p>
            <Link
              href="https://youtu.be/BNN7UwM6fbg?si=VCDM9Zp0SiQEhIDX" target="_blank"
              className="inline-block border-b border-foreground/20 pb-2 uppercase tracking-widest text-sm hover:border-foreground hover:text-foreground transition-colors mt-8"
            >
              Watch Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
