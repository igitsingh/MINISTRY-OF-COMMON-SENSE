"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const problems = [
  "Broken signal",
  "Missing zebra crossing",
  "Garbage dumping",
  "Illegal parking",
  "Encroached footpath"
];

export default function CommonSenseTest() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="bg-white py-24 border-b-8 border-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-black leading-none mb-4 tracking-tighter">
          How Many Problems<br/>Can You Spot?
        </h2>
        <p className="font-mono text-lg text-gray-500 mb-12">The Common Sense Test</p>

        <div className="max-w-4xl mx-auto border-8 border-black p-2 bg-gray-100 relative cursor-pointer group" onClick={() => setRevealed(true)}>
          <div className="relative w-full aspect-video">
            <Image 
              src="https://images.unsplash.com/photo-1595278455648-fb2bb1e89ce3?q=80&w=2000&auto=format&fit=crop" 
              alt="Ordinary Street"
              fill
              className="object-cover"
            />
            
            {/* The Click Overlay */}
            {!revealed && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <div className="bg-[var(--gold)] text-black font-black uppercase tracking-widest px-8 py-4 border-4 border-black shadow-[8px_8px_0_0_#000] animate-pulse">
                  Click to Reveal
                </div>
              </div>
            )}

            {/* The Markers */}
            {revealed && (
              <>
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full border-4 border-[var(--ministry-red)] animate-ping"></div>
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full border-4 border-[var(--ministry-red)] bg-red-500/50"></div>
                
                <div className="absolute bottom-1/4 right-1/3 w-8 h-8 rounded-full border-4 border-[var(--ministry-red)] animate-ping" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-8 h-8 rounded-full border-4 border-[var(--ministry-red)] bg-red-500/50"></div>
                
                <div className="absolute top-1/2 left-2/3 w-8 h-8 rounded-full border-4 border-[var(--ministry-red)] animate-ping" style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute top-1/2 left-2/3 w-8 h-8 rounded-full border-4 border-[var(--ministry-red)] bg-red-500/50"></div>
              </>
            )}
          </div>
        </div>

        {revealed && (
          <div className="max-w-2xl mx-auto mt-12 animate-fade-in-up">
            <div className="bg-[var(--ivory)] border-4 border-black p-8 text-left shadow-[12px_12px_0_0_#000]">
              <div className="space-y-3 font-mono font-bold text-lg mb-8">
                {problems.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-green-600">✓</span> {p}
                  </div>
                ))}
              </div>
              
              <div className="border-t-4 border-black pt-6">
                <p className="text-2xl font-black uppercase mb-2">Congratulations.</p>
                <p className="font-mono text-lg text-gray-700">You now see what most people walk past.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
