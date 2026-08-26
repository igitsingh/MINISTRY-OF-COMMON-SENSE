import Header from '@/components/Header';
import { Flag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans">
      <Header />

      <main className="max-w-4xl mx-auto p-6 md:p-12 mt-8">
        
        <div className="mb-16 text-center border-b-8 border-black pb-12">
          <Flag size={64} className="mx-auto text-[var(--ministry-red)] mb-6" />
          <h1 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter text-[var(--charcoal)] leading-none mb-6">
            Why This Movement Exists
          </h1>
        </div>

        <div className="prose prose-lg md:prose-2xl max-w-none font-serif text-gray-800 leading-relaxed mb-16 space-y-8">
          
          <p className="font-bold text-3xl leading-snug">
            The Ministry of Common Sense exists because many civic problems are not complicated.
          </p>

          <p>
            They persist not because they are unsolvable, but because nobody consistently documents them, prioritizes them, and follows them through to resolution. We believe that cleaner, safer, quieter, and more walkable neighborhoods improve daily life for absolutely everyone.
          </p>
          
          <div className="bg-white border-l-8 border-[var(--ministry-red)] p-8 shadow-[8px_8px_0_0_#000] my-12">
            <h2 className="text-2xl font-black uppercase tracking-widest text-[var(--ministry-red)] mb-4 font-sans">
              Our Mission is Simple
            </h2>
            <ul className="list-disc pl-6 space-y-4 font-bold text-xl">
              <li>Identify obvious problems.</li>
              <li>Gather undeniable evidence.</li>
              <li>Encourage immediate action.</li>
              <li>Celebrate the results.</li>
            </ul>
          </div>

          <p>
            When citizens come together to demand and implement basic common sense in their urban environment, the entire culture shifts. What starts as a project to fix a single broken streetlight in Meerut becomes a framework for accountability across the country.
          </p>

          <p>
            This is not about politics. This is not about assigning blame. This is about taking ownership of the public spaces we all share.
          </p>

          <p className="font-bold text-[var(--ministry-red)]">
            Meerut today. Goa tomorrow. Bengaluru next year. Hundreds of local communities contributing to a shared, national Common Sense civic network.
          </p>
        </div>

        <div className="text-center border-t-8 border-[var(--gold)] pt-12">
          <h2 className="text-3xl font-black uppercase tracking-widest mb-8 font-sans">
            Join the Movement
          </h2>
          <Link href="/join" className="inline-flex items-center justify-center gap-3 bg-[var(--ministry-red)] text-white font-black uppercase tracking-widest text-xl px-12 py-6 border-4 border-black hover:bg-red-900 transition-colors shadow-[8px_8px_0_0_#000] hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000]">
            Become A Field Agent
            <ArrowRight size={28} />
          </Link>
        </div>

      </main>
    </div>
  );
}
