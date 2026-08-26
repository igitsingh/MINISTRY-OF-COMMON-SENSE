import React from 'react';
import Link from 'next/link';
import { Map } from 'lucide-react';

export default function MapCTA() {
  return (
    <section className="bg-white py-32 border-b-8 border-black text-center relative overflow-hidden">
      
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #000 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Map size={80} className="mx-auto mb-8 text-[var(--ministry-red)]" />
        <h2 className="text-5xl md:text-8xl font-serif font-black uppercase tracking-tighter text-black leading-none mb-8">
          See What Your City Is Ignoring
        </h2>
        
        <Link href="/map" className="inline-block bg-[var(--gold)] text-black font-black uppercase tracking-widest text-xl px-12 py-6 border-4 border-black shadow-[12px_12px_0_0_#000] hover:-translate-y-1 hover:shadow-[16px_16px_0_0_#000] hover:bg-yellow-300 transition-all">
          Open Live Map
        </Link>
      </div>
    </section>
  );
}
