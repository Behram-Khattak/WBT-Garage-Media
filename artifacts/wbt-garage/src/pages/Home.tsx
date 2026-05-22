import { motion } from "framer-motion";
import { Link } from "wouter";

const featuredStories = [
  {
    title: "The Ghost of Le Mans",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Engineering Obsession",
    category: "Restoration",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Midnight Drive",
    category: "Cinematic",
    image: "https://images.unsplash.com/photo-1611821064430-0d40221e4e03?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section — Smoky Wall */}
      <section className="hero-wall min-h-screen flex items-stretch pt-24">
        <div className="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16 py-20">

          {/* Left — Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 flex flex-col justify-center gap-8"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/40 font-sans">
              Issue No. 01 — Private Collections
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-accent">
              EMOTIONAL<br/>MACHINES
            </h1>
            <div className="w-16 h-px bg-accent/60" />
            <p className="text-white/60 text-lg leading-relaxed max-w-md font-sans">
              Exploring rare and collectible cars as cultural icons, emotional machines, and engineering masterpieces — through access to private collections and cinematic storytelling.
            </p>
            <div className="flex items-center gap-6 pt-2">
              <Link
                href="/gallery"
                className="text-xs uppercase tracking-[0.3em] text-white/80 border-b border-white/40 pb-1 hover:text-accent hover:border-accent transition-colors duration-300"
              >
                Explore the Collection
              </Link>
              <span className="text-white/20 text-lg">—</span>
              <Link
                href="/about"
                className="text-xs uppercase tracking-[0.3em] text-white/40 border-b border-white/20 pb-1 hover:text-accent hover:border-accent transition-colors duration-300"
              >
                Our Story
              </Link>
            </div>
            <p className="text-xs uppercase tracking-widest text-white/30 font-sans mt-4">
              By Volodymyr Nosov — WBT Garage
            </p>
          </motion.div>

          {/* Right — Poster on Wall */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: -1.5 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 flex justify-center items-center py-12"
          >
            <div className="poster-shadow" style={{ transform: 'rotate(-1.5deg)' }}>
              {/* Tape strip top-left */}
              <div
                className="tape absolute w-14 h-5 z-20 rounded-sm"
                style={{ top: '-10px', left: '28px', transform: 'rotate(-2deg)' }}
              />
              {/* Tape strip top-right */}
              <div
                className="tape absolute w-14 h-5 z-20 rounded-sm"
                style={{ top: '-8px', right: '36px', transform: 'rotate(3deg)' }}
              />
              {/* White photo border — like a printed poster */}
              <div className="relative bg-white p-3 pb-10" style={{ maxWidth: '380px' }}>
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800"
                    alt="Rare collectible car"
                    className="w-full h-full object-cover"
                    style={{ filter: 'contrast(1.05) saturate(0.9)' }}
                  />
                </div>
                {/* Caption strip */}
                <div className="pt-3 text-center">
                  <p className="font-serif text-neutral-800 text-xs tracking-widest uppercase">WBT Garage — Private Collection</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Ticker Strip */}
      <div className="bg-neutral-900 border-y border-white/10 py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...Array(3)].map((_, repeat) => (
            <div key={repeat} className="flex items-center shrink-0">
              {["Heritage", "Restoration", "Cinematic", "Rare Finds", "Private Collections", "Engineering", "Speed & Legacy", "Collector's Edition"].map((tag, i) => (
                <span key={i} className="flex items-center gap-6 px-6">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/60 font-sans">{tag}</span>
                  <span className="text-accent text-lg leading-none">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <section className="py-32 md:py-48 px-8 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-white/10" />
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

      {/* Featured Stories */}
      <section className="py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-4xl md:text-5xl">Featured Stories</h2>
            <Link href="/gallery" className="hidden md:inline-block text-accent uppercase tracking-widest text-xs hover:text-white transition-colors border-b border-accent pb-1">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <p className="text-accent uppercase tracking-widest text-xs mb-3">{story.category}</p>
                <h3 className="font-serif text-2xl group-hover:text-accent transition-colors">{story.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Media Preview */}
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
              <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200" alt="Video preview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-accent uppercase tracking-[0.3em] text-sm">Latest Episode</h2>
            <h3 className="font-serif text-4xl md:text-6xl">The Art of the Engine</h3>
            <p className="text-foreground/60 leading-relaxed text-lg">
              Step inside the workshop where masterpieces are reborn. An intimate look at the meticulous process of preserving automotive history.
            </p>
            <Link 
              href="/media" 
              className="inline-block border-b border-white/20 pb-2 uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-colors mt-8"
            >
              Watch Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
