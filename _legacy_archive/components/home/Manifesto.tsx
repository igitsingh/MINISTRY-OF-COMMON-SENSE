import React from 'react';

export default function Manifesto() {
  return (
    <section className="bg-black text-[var(--ivory)] py-32 border-b-[16px] border-[var(--ministry-red)]">
      <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-mono font-black uppercase tracking-widest text-[var(--gold)] mb-12 border-l-8 border-[var(--ministry-red)] pl-6">
          The Manifesto
        </h2>
        
        <div className="space-y-8 font-serif text-3xl md:text-5xl leading-tight text-white/90">
          <p>We are not political.</p>
          <p>We are not anti-government.</p>
          <p>We are not anti-citizen.</p>
          <p className="text-[var(--gold)]">We believe small things matter.</p>
          <p className="text-[var(--ministry-red)] font-black">Because cities are built from small things.</p>
        </div>
      </div>
    </section>
  );
}
