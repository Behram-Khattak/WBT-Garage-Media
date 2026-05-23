import { motion } from "framer-motion";

const episodes = [
  {
    title: "Volume 01: Spyker C8 Aileron on Terramar — The Ghost of Motorsport | WBT Garage #1",
    type: "youtube video",
    description: "In the very first episode of WBT Garage, Volodymyr Nosov explores one of the rarest hand-built supercars ever made — the Spyker C8 Aileron — on the legendary Terramar circuit.",
    videoId: "BNN7UwM6fbg", // Extracted ID
    date: "May 2026"
  },
  {
    title: "Volume 02: WBT Garage • Official Teaser | Rare Cars, Speed & Style",
    type: "youtube video",
    description: "Rare cars, cinematic driving, private collections, and collector culture — this is WBT Garage. An international automotive media project.",
    videoId: "LbrQY7fkIQY", // Extracted ID
    date: "May 2026"
  },
  {
    title: "Volume 03: British Steel",
    type: "youtube short",
    description: "A cinematic exploration of the timeless allure of British sports cars and the passionate individuals who keep their legacy alive.",
    videoId: "k2uVIXTGHE0", // Extracted ID
    date: "May 2026"
  }
];

export default function Media() {
  return (
    <div className="min-h-screen bg-background mt-6 pt-32 pb-32 px-4 md:px-8">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.4 }}
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
              key={ep.videoId}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="border-b border-white/5 pb-32 last:border-0 last:pb-0"
            >
              {/* The new wrapper for side-by-side alignment */}
              <div className="flex flex-col md:flex-row gap-12 items-start">

                {/* Text Column */}
                <div className="w-full md:w-2/5 space-y-6">
                  <p className="text-accent uppercase tracking-widest text-xs">{ep.date}</p>
                  <h2 className="font-serif text-3xl md:text-4xl leading-snug">{ep.title}</h2>
                  <p className="text-foreground/70 text-lg leading-relaxed font-light">
                    {ep.description}
                  </p>
                </div>

                {/* Video Column */}
                <div className={`w-full md:w-3/5 bg-[#050505] p-2 md:p-4 rounded-4xl border border-white/10 overflow-hidden transition-all duration-500 ${ep.type === "youtube short"
                  ? "md:max-w-[320px] aspect-[9/16]"
                  : "aspect-video"
                  }`}>
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${ep.videoId}?modestbranding=1&rel=0`}
                    title={ep.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}