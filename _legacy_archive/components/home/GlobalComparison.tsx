import React from 'react';
import { ShieldAlert, CheckCircle } from 'lucide-react';

export default function GlobalComparison() {
  return (
    <section className="bg-[var(--charcoal)] text-white py-32 border-b-[12px] border-[var(--gold)] relative overflow-hidden">
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-white/50 mb-6 uppercase">
            <ShieldAlert size={14} className="text-[var(--gold)]" /> Intelligence Report
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black uppercase text-[var(--gold)] leading-none tracking-tighter drop-shadow-lg">
            Global Common Sense
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* LEFT: INDIA (The Problem) */}
          <div className="relative bg-[#3b0918] p-10 md:p-14 border-4 border-[var(--ministry-red)] shadow-[0_0_40px_rgba(153,27,27,0.3)]">
            <div className="absolute top-0 right-0 bg-[var(--ministry-red)] text-white font-mono text-xs font-bold px-3 py-1 uppercase tracking-widest border-b-4 border-l-4 border-black">
              Current State
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-widest text-white mb-10 border-b-2 border-white/20 pb-6 flex items-center justify-between">
              India
              <span className="text-[var(--ministry-red)] text-5xl font-serif">✕</span>
            </h3>
            
            <ul className="space-y-8 font-mono font-bold text-lg md:text-xl text-white/90">
              <li className="flex items-start gap-4">
                <span className="text-[var(--ministry-red)] mt-1">✕</span> 
                <div>
                  <span className="block uppercase tracking-widest text-white">Honking</span>
                  <span className="text-sm font-normal text-white/60">Noise pollution accepted as default.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--ministry-red)] mt-1">✕</span> 
                <div>
                  <span className="block uppercase tracking-widest text-white">Missing Sidewalks</span>
                  <span className="text-sm font-normal text-white/60">Pedestrians forced into incoming traffic.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--ministry-red)] mt-1">✕</span> 
                <div>
                  <span className="block uppercase tracking-widest text-white">Garbage Overflow</span>
                  <span className="text-sm font-normal text-white/60">Public spaces treated as landfills.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT: GLOBAL (The Solution) */}
          <div className="relative bg-[#0d1b1a] p-10 md:p-14 border-4 border-[#14532d] shadow-[0_0_40px_rgba(20,83,45,0.3)] overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#14532d] text-white font-mono text-xs font-bold px-3 py-1 uppercase tracking-widest border-b-4 border-l-4 border-black z-10">
              Optimal State
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-widest text-white mb-10 border-b-2 border-white/20 pb-6 flex items-center justify-between relative z-10">
              Global
              <CheckCircle className="text-green-500" size={40} strokeWidth={3} />
            </h3>
            
            <div className="space-y-4 font-mono font-bold text-2xl md:text-3xl tracking-widest text-white/80 uppercase relative z-10">
              <div className="flex items-center gap-4 group cursor-default">
                <span className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                Singapore
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <span className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                Japan
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <span className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                Netherlands
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <span className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                Switzerland
              </div>
            </div>

            {/* Giant watermark */}
            <div className="absolute -bottom-10 -right-10 text-[200px] font-black text-green-500/10 pointer-events-none transform rotate-12">✓</div>
          </div>

        </div>

        <div className="max-w-4xl mx-auto text-center mt-20 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--gold)]/30 -translate-x-1/2 -z-10 hidden md:block"></div>
          
          <div className="bg-[var(--ivory)] text-black p-8 md:p-12 border-4 border-black shadow-[16px_16px_0_0_var(--gold)] inline-block">
            <p className="font-mono text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest">
              These countries are not cleaner because their citizens are better.
            </p>
            <p className="font-serif text-3xl md:text-4xl font-black text-[var(--ministry-red)]">
              They are cleaner because their systems reward common sense.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
