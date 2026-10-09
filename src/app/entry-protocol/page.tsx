import Link from "next/link";
import * as motion from "framer-motion/client";

export default function EntryProtocol() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-24 w-full bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <motion.div 
        className="max-w-5xl w-full relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">
          
          {/* Left Column: The Premise */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white border-b-4 border-white pb-4 md:pb-6">
              ENTRY PROTOCOL
            </h1>
            
            <div className="font-[family-name:var(--font-sans)] text-sm md:text-base text-gray-300 space-y-4 md:space-y-6 leading-relaxed">
              <h3 className="font-bold text-xs md:text-sm text-gray-400 font-[family-name:var(--font-mono)] uppercase tracking-tighter">KAUN CHAHIYE HAMEIN?</h3>
              
              <p className="hover:text-white transition-colors duration-300 leading-snug">
                No influencers, no podcasters, aur "India's Got Latent" walon ki toh bilkul entry nahi. Ambani bhi aayega toh line mein lagega.
              </p>
              
              <p className="font-[family-name:var(--font-brand)] text-white text-lg md:text-xl uppercase tracking-tighter leading-tight pb-4 border-b-2 border-white/10">
                WE JUST WANT PEOPLE WHO AREN'T NPCs. PEOPLE WITH ACTUAL COMMON SENSE.
              </p>

              <p className="hover:text-white transition-colors duration-300 pt-2 text-neon font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">Seats full hone wali hain. No second chances.</p>
            </div>
          </div>

          {/* Right Column: The Proposition & Action */}
          <div className="space-y-6 md:space-y-8 flex flex-col h-full justify-between pt-4 md:pt-0">
            
            <div className="space-y-4">
              <h3 className="font-bold text-xs md:text-sm text-gray-400 font-[family-name:var(--font-mono)] uppercase tracking-tighter">FAYDA KYA HAI?</h3>
              <div className="font-[family-name:var(--font-sans)] text-sm md:text-base text-gray-300 space-y-2">
                <p>Ander aagaye toh yeh milega:</p>
                <ul className="list-disc pl-5 space-y-1 pt-2">
                  <li>The Secret Archive</li>
                  <li>Insane Merch Drops</li>
                  <li>Top Tier Networking (Flex)</li>
                  <li>And other cool stuff we can't tell you yet.</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t-2 border-white/10">
                <p className="font-[family-name:var(--font-brand)] font-bold text-white uppercase tracking-tighter text-lg md:text-xl">
                  PAISE SE NAHI KHAAREED SAKTE. AUKAT BANAO.
                </p>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8 mt-auto pt-8">
              <div className="pb-6 md:pb-8 border-b-2 border-white/20">
                <div className="font-bold text-xs md:text-sm text-gray-400 font-[family-name:var(--font-mono)] uppercase tracking-tighter">CURRENT INTAKE STATUS</div>
                <div className="text-3xl md:text-4xl font-[family-name:var(--font-mono)] font-bold text-neon uppercase tracking-tighter mt-1 md:mt-2 animate-pulse">OPEN</div>
              </div>

              <Link href="/evaluation" className="inline-block w-full">
                <button className="w-full mocs-button p-4 md:p-6 text-sm md:text-base font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest">
                  [ BEGIN EVALUATION ]
                </button>
              </Link>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
