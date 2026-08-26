"use client";

import Link from "next/link";
import * as motion from "framer-motion/client";

// The full text on one line so we can warp it properly as a single varsity graphic
const TITLE = "MINISTRY OF COMMON SENSE";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

const bracketVariants = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "circOut" } },
};

export default function Home() {
  const letters = TITLE.split("");
  const midIndex = letters.length / 2;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-24 text-center h-screen bg-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <motion.div className="max-w-7xl mx-auto flex flex-col items-center gap-12 relative z-10 w-full">
        
        <motion.div 
          className="p-4"
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-3xl md:text-6xl font-bold tracking-tighter uppercase text-neon flex justify-center whitespace-nowrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {letters.map((char, i) => {
              // Calculate distance from center (0 = center, 1 = edge)
              const distFromCenter = Math.abs(i - midIndex) / midIndex;
              // Center is up to 1.8x taller, edges are 1.0x
              // Using a sine curve or power for a smoother arch instead of linear
              const curve = Math.cos(distFromCenter * Math.PI / 2);
              const scaleY = 1 + (0.8 * curve);
              
              return (
                <motion.span
                  key={i}
                  className="inline-block hover:text-white transition-colors duration-300"
                  style={{ 
                    width: char === " " ? "1rem" : "auto",
                    padding: "0 1px" 
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.1 } }}
                >
                  <span 
                    style={{ 
                      display: "inline-block",
                      transform: `scaleY(${scaleY})`,
                      transformOrigin: "center"
                    }}
                  >
                    {char}
                  </span>
                </motion.span>
              );
            })}
          </motion.h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ delay: 1.2, duration: 0.6, ease: "circOut" }}
          className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mt-8"
        >
          COMMON SENSE IS NO LONGER COMMON.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring", bounce: 0.5 }}
          className="pt-4"
        >
          <button 
            disabled
            className="pixel-border px-8 py-4 inline-block text-xl font-bold uppercase tracking-tight opacity-50 cursor-not-allowed"
          >
            ENTER THE MINISTRY
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
