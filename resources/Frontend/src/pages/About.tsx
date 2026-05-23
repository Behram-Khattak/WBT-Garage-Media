import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-40 pb-24 px-8 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl mb-8"
          >
            The Collector's Vision
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/3">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="sticky top-32"
            >
              <h2 className="text-accent uppercase tracking-widest text-sm mb-6">Founder</h2>
              <p className="font-serif text-3xl mb-4">Volodymyr Nosov</p>
              <p className="text-foreground/60 leading-relaxed">
                Entrepreneur and collector.
              </p>
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-4xl mb-8">Philosophy</h3>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
                WBT Garage is more than a collection of metal and rubber. It is an exploration of rare and collectible cars as emotional machines, cultural icons, and engineering masterpieces. Through access to private collections and cinematic storytelling, we document the soul of the automobile.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Classic car detail" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-4xl mb-8">The Studio</h3>
              <p className="text-lg text-foreground/80 leading-relaxed font-light mb-6">
                Operating as both a private collection and a media production house, WBT Garage treats every vehicle as a protagonist. We don't just review cars; we capture their essence, their history, and the visceral experience of commanding them.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                Our approach is deeply editorial—influenced by high-fashion photography and documentary filmmaking. The result is a platform where enthusiasts can experience the pinnacle of automotive culture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
