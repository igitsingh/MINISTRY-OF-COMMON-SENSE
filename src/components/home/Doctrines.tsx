import React from 'react';
import Link from 'next/link';

const doctrines = [
  { num: "01", title: "Broken Windows", desc: "Visible neglect breeds further neglect and crime." },
  { num: "02", title: "Tragedy of Commons", desc: "Shared public spaces are destroyed without accountability." },
  { num: "03", title: "No Horn Culture", desc: "Noise pollution is a symptom of systemic traffic failure." },
  { num: "04", title: "Walkability", desc: "Cities must be built for human beings, not just cars." },
  { num: "05", title: "Visibility Matters", desc: "Hidden signs and poor lighting cause civic paralysis." },
  { num: "06", title: "Maintenance Culture", desc: "Building is cheap. Maintaining is where societies succeed." }
];

export default function Doctrines() {
  return (
    <section className="bg-[var(--ivory)] py-24 border-b-8 border-black">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white font-mono font-bold text-xs px-3 py-1 mb-4 uppercase tracking-widest">
            Field Manual
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-black leading-none tracking-tighter">
            The Six Doctrines
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctrines.map((doc) => (
            <div key={doc.num} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_var(--ministry-red)] flex flex-col h-full hover:-translate-y-1 hover:shadow-[12px_12px_0_0_var(--ministry-red)] transition-all">
              <div className="text-[var(--ministry-red)] font-black text-5xl mb-4 font-serif">{doc.num}</div>
              <h3 className="font-black text-2xl uppercase tracking-widest mb-4 border-b-4 border-black pb-4">{doc.title}</h3>
              <p className="font-mono text-gray-700 font-bold mb-8 flex-grow">{doc.desc}</p>
              
              <Link href="/library" className="inline-block border-2 border-black text-center py-3 font-black uppercase tracking-widest text-xs hover:bg-[var(--gold)] transition-colors">
                Learn More
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
