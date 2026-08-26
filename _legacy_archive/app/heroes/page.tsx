import React from 'react';
import Header from '@/components/Header';
import { Medal } from 'lucide-react';

export default function Heroes() {
  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 md:mb-12 border-b-4 border-[var(--gold)] pb-6">
          <Medal size={48} className="text-[var(--gold)] shrink-0" />
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-wider text-[var(--charcoal)]">Hall of Heroes</h1>
            <p className="font-mono text-xs md:text-base text-gray-500 uppercase tracking-widest mt-2">Honoring those who demonstrated basic civic sense.</p>
          </div>
        </div>

        <div className="bg-[var(--charcoal)] text-white p-6 md:p-12 shadow-2xl relative min-h-[400px] md:min-h-[500px] flex items-center justify-center border-t-8 border-[var(--gold)]">
            <div className="text-center">
                <div className="inline-block bg-[var(--gold)] text-[var(--charcoal)] font-black uppercase tracking-widest px-4 py-2 border-2 border-[var(--gold)] mb-6 text-xl shadow-lg">
                    CLASSIFIED ROSTER
                </div>
                <h2 className="text-3xl font-serif font-bold text-white">The Roster is currently sealed.</h2>
                <p className="font-mono text-gray-400 mt-4 max-w-lg mx-auto">We are verifying reports of spontaneous civic responsibility. Agents will be decorated shortly.</p>
            </div>
        </div>
      </main>
    </div>
  );
}