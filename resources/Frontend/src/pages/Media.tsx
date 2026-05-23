import { motion } from "framer-motion";

const episodes = [
  {
    title: "Volume 01: The Soul of Stuttgart",
    description: "An intimate look into a private Porsche collection that redefines the meaning of obsession. We explore the air-cooled era and the mechanical symphony of the flat-six engine.",
    videoId: "dQw4w9WgXcQ", // Placeholder
    date: "OCT 2023"
  },
  {
    title: "Volume 02: Italian Blood",
    description: "V12 engines and dramatic styling. The story of a neglected classic brought back to concourse condition through thousands of hours of painstaking labor.",
    videoId: "y9j-BL5ocW8", // Placeholder
    date: "NOV 2023"
  },
  {
    title: "Volume 03: British Elegance",
    description: "Capturing the essence of 1960s motoring elegance. A cinematic drive through the misty hills, celebrating a design icon that changed the world.",
    videoId: "jNQXAC9IVRw", // Placeholder
    date: "DEC 2023"
  }
];

export default function Media() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Car Projects</h1>
          <p className="text-foreground/60 uppercase tracking-widest text-sm max-w-xl mx-auto">
            Cinematic case studies and documentary episodes.
          </p>
        </motion.div>

        <div className="space-y-32">
          {episodes.map((ep, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="border-b border-white/5 pb-32 last:border-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="w-full md:w-1/3">
                  <p className="text-accent uppercase tracking-widest text-xs mb-4">{ep.date}</p>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-snug">{ep.title}</h2>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-foreground/70 text-lg leading-relaxed font-light">
                    {ep.description}
                  </p>
                </div>
              </div>
              
              <div className="aspect-video w-full bg-[#050505] p-2 md:p-4 rounded-sm border border-white/10">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${ep.videoId}?controls=0&rel=0`} 
                  title={ep.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
