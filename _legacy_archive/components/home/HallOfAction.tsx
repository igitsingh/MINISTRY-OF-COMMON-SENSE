import React from 'react';
import Link from 'next/link';

interface Victory {
  id: string;
  title: string;
  city: string | null;
}

export default function HallOfAction({ victories }: { victories: Victory[] }) {
  const displayVictories = victories.length > 0 ? victories : [
    { id: '1', title: 'Streetlight Fixed', city: 'Delhi' },
    { id: '2', title: 'Garbage Cleared', city: 'Mumbai' },
    { id: '3', title: 'Zebra Crossing Repainted', city: 'Bengaluru' },
    { id: '4', title: 'Illegal Hoarding Removed', city: 'Pune' },
    { id: '5', title: 'Signal Repaired', city: 'Chennai' },
  ];

  return (
    <section className="bg-[var(--gold)] text-black py-24 border-b-8 border-black">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-black leading-none tracking-tighter mb-4">
            Hall Of Action
          </h2>
          <p className="font-mono text-xl font-bold">Proof that action works.</p>
        </div>

        <div className="bg-white border-8 border-black p-8 md:p-12 shadow-[16px_16px_0_0_#000]">
          <ul className="space-y-6">
            {displayVictories.slice(0, 5).map((vic, idx) => (
              <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-black/10 pb-6 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <span className="text-green-600 text-3xl font-black">✓</span>
                  <span className="font-mono text-xl md:text-2xl font-bold">{vic.title}</span>
                </div>
                <div className="font-mono text-sm text-gray-500 uppercase tracking-widest mt-2 sm:mt-0 ml-12 sm:ml-0">
                  {vic.city || 'Verified'}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/hall-of-action" className="inline-block border-b-4 border-black font-black uppercase tracking-widest text-lg hover:text-[var(--ministry-red)] hover:border-[var(--ministry-red)] transition-colors pb-1">
            View All Victories →
          </Link>
        </div>

      </div>
    </section>
  );
}
