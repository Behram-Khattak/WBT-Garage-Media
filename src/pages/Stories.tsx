import { motion } from "framer-motion";

export default function Stories() {
    return (
        <div className="min-h-screen bg-background mt-6 pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h1 className="font-serif text-5xl md:text-7xl mb-6">Stories</h1>
                    <p className="text-foreground/60 uppercase tracking-widest text-sm">
                        Personal narratives and reflections from the founder.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    <div>
                        <h2 className="font-serif text-3xl mb-4">The Spark of Passion</h2>
                        <p className="text-foreground/80 leading-relaxed font-light">
                            My love affair with cars began in childhood, sparked by the roar of engines and the sleek lines of classic designs. Each car tells a story, and I am driven to share these stories with the world.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-3xl mb-4">A Journey of Discovery</h2>
                        <p className="text-foreground/80 leading-relaxed font-light">
                            From the garages of private collectors to the heart of automotive culture, my journey has been one of discovery and connection. Every car I encounter adds a new chapter to this ongoing story.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-3xl mb-4">The Future of the Collection</h2>
                        <p className="text-foreground/80 leading-relaxed font-light">
                            As I continue to explore and expand the collection, I am excited to share not only the cars but also the stories behind them. The future holds endless possibilities for new discoveries and unforgettable narratives.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}