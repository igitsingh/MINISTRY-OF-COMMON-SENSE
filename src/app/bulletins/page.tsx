import * as motion from "framer-motion/client";

const bulletins = [
  "COMMON SENSE IS NOT COMMON.",
  "IF EVERYONE IS SHOUTING, SILENCE BECOMES AN ADVANTAGE.",
  "CLARITY IS A COMPETITIVE ADVANTAGE.",
  "THINKING IS OPTIONAL. CONSEQUENCES ARE NOT."
];

export default function Bulletins() {
  return (
    <div className="flex-1 flex flex-col p-6 md:p-24 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-24"
      >
        <header className="mb-24">
          <h1 className="text-2xl font-mono uppercase tracking-widest border-b border-muted pb-4">
            Bulletins
          </h1>
        </header>

        <div className="space-y-32">
          {bulletins.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-sans uppercase tracking-tight font-medium leading-tight max-w-3xl mx-auto">
                {text}
              </h2>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
