"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const chain = [
  "One overflowing dustbin",
  "Garbage pile forms",
  "People stop caring",
  "Street deteriorates",
  "Area becomes unsafe"
];

export default function BrokenWindows() {
  const [revealed, setRevealed] = useState(0);

  return (
    <section className="bg-[var(--ivory)] py-24 border-b-8 border-black overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-[var(--ministry-red)] leading-none mb-16 tracking-tighter">
          Small Problems<br/>Become Big Problems
        </h2>

        <div className="max-w-md mx-auto space-y-4 mb-16">
          {chain.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div 
                className={`w-full bg-white border-4 border-black p-4 font-mono font-bold text-lg uppercase tracking-widest shadow-[8px_8px_0_0_#000] transition-all duration-500 cursor-pointer ${idx <= revealed ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'}`}
                onClick={() => setRevealed(Math.max(revealed, idx + 1))}
              >
                {step}
              </div>
              {idx < chain.length - 1 && (
                <div className={`my-4 transition-all duration-500 ${idx < revealed ? 'opacity-100' : 'opacity-20'}`}>
                  <ArrowDown size={32} className="text-[var(--ministry-red)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {revealed >= chain.length - 1 && (
          <div className="animate-fade-in-up">
            <div className="font-mono text-xl md:text-2xl font-bold bg-[var(--gold)] text-black p-8 border-4 border-black mb-8 shadow-[12px_12px_0_0_#000]">
              <p className="mb-2">Cities rarely collapse all at once.</p>
              <p>They collapse one ignored problem at a time.</p>
            </div>

            <Link href="/library" className="inline-block bg-black text-white font-black uppercase tracking-widest px-8 py-4 border-4 border-black shadow-[8px_8px_0_0_var(--ministry-red)] hover:bg-gray-800 hover:-translate-y-1 transition-all">
              Learn The Science
            </Link>
          </div>
        )}
        
        {revealed < chain.length - 1 && (
          <div className="font-mono text-sm text-gray-500 uppercase tracking-widest mt-8 animate-pulse">
            Click the chain to reveal the timeline
          </div>
        )}
      </div>
    </section>
  );
}
