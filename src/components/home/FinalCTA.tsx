import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-[#111] text-[var(--ivory)] py-32 border-b-[16px] border-black relative overflow-hidden">
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Official Serial Number */}
        <div className="font-mono text-white/30 text-xs tracking-[0.5em] mb-12">
          DOC. REF: MOCS-IN-001/A
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-[80px] font-serif font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white/90">
          If You See Something Wrong,
        </h2>
        
        <div className="relative inline-block mb-20">
          <div className="absolute -inset-4 border-2 border-[var(--ministry-red)]/50 pointer-events-none hidden md:block"></div>
          <div className="absolute -inset-2 border-2 border-[var(--gold)]/50 pointer-events-none hidden md:block"></div>
          <h2 className="relative text-3xl md:text-5xl lg:text-[70px] font-black uppercase text-[var(--gold)] leading-[1.1] bg-black p-6 md:p-10 border-4 border-[var(--ministry-red)] shadow-[0_0_60px_rgba(153,27,27,0.4)]">
            You Are Now Responsible<br/>For Noticing It.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          <Link href="/submit" className="flex-1 bg-[var(--ministry-red)] text-white font-black uppercase tracking-widest text-lg md:text-xl px-8 py-6 border-2 border-[var(--ministry-red)] shadow-[0_0_20px_rgba(153,27,27,0.5)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(153,27,27,0.8)] transition-all text-center">
            Report Evidence
          </Link>
          <Link href="/agents" className="flex-1 bg-transparent text-white font-black uppercase tracking-widest text-lg md:text-xl px-8 py-6 border-2 border-white/50 hover:border-white hover:bg-white/5 hover:-translate-y-1 transition-all text-center backdrop-blur-sm">
            Become An Agent
          </Link>
          <Link href="/map" className="flex-1 bg-[var(--gold)] text-black font-black uppercase tracking-widest text-lg md:text-xl px-8 py-6 border-2 border-[var(--gold)] shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:bg-yellow-400 transition-all text-center">
            Explore The Map
          </Link>
        </div>
      </div>
    </section>
  );
}
