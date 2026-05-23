import { motion } from "framer-motion";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { Linkedin } from "lucide-react";

export default function Approach() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-0 flex flex-col">
      <div className="flex-1 px-4 md:px-8 max-w-7xl mx-auto w-full mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 mt-12"
        >
          <h1 className="font-serif text-5xl md:text-8xl mb-6">Approach Us</h1>
          <p className="text-foreground/60 uppercase tracking-widest text-sm">For inquiries, collections, and collaborations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            <div>
              <h2 className="text-accent uppercase tracking-widest text-xs mb-8">Headquarters</h2>
              <address className="not-italic font-serif text-2xl md:text-3xl leading-relaxed">
                Kyiv<br/>
                Ukraine
              </address>
            </div>

            <div>
              <h2 className="text-accent uppercase tracking-widest text-xs mb-8">Direct Line</h2>
              <a href="mailto:contact@wbtgarage.com" className="font-serif text-2xl md:text-3xl hover:text-accent transition-colors">
                contact@wbtgarage.com
              </a>
            </div>

            <div>
              <h2 className="text-accent uppercase tracking-widest text-xs mb-8">Network</h2>
              <div className="flex gap-8">
                <a href="#" className="text-2xl text-foreground/70 hover:text-accent transition-colors transform hover:-translate-y-1 duration-300">
                  <SiInstagram />
                </a>
                <a href="#" className="text-2xl text-foreground/70 hover:text-accent transition-colors transform hover:-translate-y-1 duration-300">
                  <SiYoutube />
                </a>
                <a href="#" className="text-2xl text-foreground/70 hover:text-accent transition-colors transform hover:-translate-y-1 duration-300">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[500px] md:h-[600px] relative border border-white/10 p-2"
          >
            <div className="absolute inset-0 bg-accent/5 z-10 pointer-events-none mix-blend-overlay" />
            <iframe 
              src="https://maps.google.com/maps?q=Kyiv,Ukraine&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 grayscale invert opacity-80"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
