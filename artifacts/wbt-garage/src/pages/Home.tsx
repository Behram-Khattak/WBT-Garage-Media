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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic Garage" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-4 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-accent mb-6 leading-[0.9]"
          >
            EMOTIONAL <br/> MACHINES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-white/90 tracking-[0.2em] uppercase mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Exploring rare and collectible cars as cultural icons and engineering masterpieces.
          </motion.p>
        </div>
      </section>

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
