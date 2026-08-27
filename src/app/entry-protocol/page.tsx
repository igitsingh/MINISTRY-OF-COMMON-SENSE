import Link from "next/link";
import * as motion from "framer-motion/client";

export default function EntryProtocol() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-24 w-full bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-md w-full space-y-8 md:space-y-16 relative z-10"
      >
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase text-neon border-b-2 md:border-b-4 border-neon pb-2 md:pb-4">
            ENTRY PROTOCOL
          </h1>
          
          <div className="text-base md:text-lg font-bold text-white space-y-4 md:space-y-6 uppercase tracking-tighter text-left leading-tight">
            <p className="hover:text-neon transition-colors duration-300">ENTRY IS NOT GUARANTEED.</p>
            <p className="hover:text-neon transition-colors duration-300">WE REVIEW FOR CURIOSITY, ORIGINAL THOUGHT, AND ATTENTION.</p>
            <p className="hover:text-neon transition-colors duration-300">MOST APPLICATIONS ARE NEVER REVIEWED TWICE.</p>
          </div>

          <div className="pt-6 md:pt-8 pb-6 md:pb-8 border-y-2 border-neon/50">
            <div className="font-bold text-xs md:text-sm text-neon/70 uppercase tracking-tighter">CURRENT INTAKE STATUS</div>
            <div className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mt-1 md:mt-2 animate-pulse">OPEN</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center pt-4 md:pt-8 w-full"
        >
          <Link 
            href="/evaluation"
            className="pixel-border px-6 py-4 w-full md:w-auto block md:inline-block text-sm sm:text-lg font-bold uppercase tracking-tighter hover:bg-white hover:text-black transition-colors duration-300"
          >
            [ BEGIN EVALUATION ]
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
