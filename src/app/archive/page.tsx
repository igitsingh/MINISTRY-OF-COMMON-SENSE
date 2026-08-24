import React from 'react';
import Header from '@/components/Header';
import { ShieldAlert } from 'lucide-react';

export default function Archive() {
  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 md:mb-12 border-b-4 border-[var(--charcoal)] pb-6">
          <ShieldAlert size={48} className="text-[var(--ministry-red)] shrink-0" />
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-wider text-[var(--ministry-red)]">National Case Archive</h1>
            <p className="font-mono text-xs md:text-base text-gray-500 uppercase tracking-widest mt-2">A historical record of things we shouldn't have to document.</p>
          </div>
        </div>

        <div className="bg-[#f4ebd0] border-l-[8px] md:border-l-[16px] border-[#d4c5a9] p-6 md:p-12 shadow-2xl relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
            <div className="text-center">
                <div className="inline-block bg-[var(--charcoal)] text-[var(--gold)] font-black uppercase tracking-widest px-4 py-2 border-2 border-[var(--charcoal)] mb-6 text-xl shadow-lg">
                    SYSTEM UPDATING
                </div>
                <h2 className="text-3xl font-serif font-bold text-[var(--ministry-red)]">The Archives are currently being digitized.</h2>
                <p className="font-mono text-gray-600 mt-4 max-w-lg mx-auto">We have centuries of poor civic sense to index. Please check back later or submit a new case to expedite the process.</p>
            </div>
        </div>
      </main>
    </div>
  );
}