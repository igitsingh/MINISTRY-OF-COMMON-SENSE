import React from 'react';
import Header from '@/components/Header';
import { BookOpen, AlertTriangle, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-[var(--ivory)] text-[var(--charcoal)] font-sans flex flex-col w-full">
      <Header />
      
      <main className="flex-1 w-full max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24">
        
        <div className="flex flex-col items-center text-center mb-16">
          <BookOpen size={64} className="text-[var(--ministry-red)] mb-6" />
          <div className="inline-block bg-[var(--charcoal)] text-[var(--gold)] font-black uppercase tracking-widest px-4 py-2 border-2 border-black mb-6 text-sm">
            DECLARATION OF INTENT
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-wider text-[var(--ministry-red)] leading-tight">
            The Official Manifesto
          </h1>
          <p className="font-mono text-gray-500 uppercase tracking-widest mt-4 text-sm md:text-base">
            Read carefully. Ignorance is no longer an excuse.
          </p>
        </div>

        <div className="prose prose-lg md:prose-xl max-w-none font-serif text-gray-800 leading-relaxed">
          
          <p className="text-2xl md:text-3xl font-black text-center text-black mb-12 border-y-4 border-[var(--gold)] py-8">
            "We believe that a society capable of launching rockets to Mars should be capable of building a pavement that doesn't try to assassinate its pedestrians."
          </p>

          <div className="bg-white p-8 md:p-12 border-2 border-[var(--charcoal)] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16">
            <h2 className="text-3xl font-black uppercase tracking-wider text-[var(--ministry-red)] mb-6 flex items-center gap-3">
              <AlertTriangle size={32} />
              The Problem
            </h2>
            <p className="mb-6">
              Look around. We have normalized the absurd. We step over open manholes as if they are natural geological formations. We accept that trees must be encased in concrete. We treat zebra crossings as mere street art rather than functional safety zones. 
            </p>
            <p>
              The erosion of common sense in our civic infrastructure is not just an inconvenience—it is an insult to our collective intelligence.
            </p>
          </div>

          <div className="bg-[#f4ebd0] p-8 md:p-12 border-l-[16px] border-[#d4c5a9] mb-16">
            <h2 className="text-3xl font-black uppercase tracking-wider text-[var(--charcoal)] mb-6 flex items-center gap-3">
              <Eye size={32} />
              Our Core Directives
            </h2>
            
            <ol className="space-y-8 list-none pl-0">
              <li className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <span className="bg-[var(--ministry-red)] text-white text-2xl font-black px-4 py-2 shrink-0">I</span>
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-widest text-[var(--ministry-red)] mb-2">Observe & Document</h3>
                  <p className="font-mono text-base text-gray-700">We do not look away. When we see civic absurdity, we lock in the coordinates, capture the evidence, and file it in the National Archives.</p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <span className="bg-[var(--ministry-red)] text-white text-2xl font-black px-4 py-2 shrink-0">II</span>
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-widest text-[var(--ministry-red)] mb-2">Humiliate with Respect</h3>
                  <p className="font-mono text-base text-gray-700">Anger is fleeting, but public embarrassment lasts forever. We use humor and satire as weapons of mass correction, shaming the system into working properly.</p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <span className="bg-[var(--ministry-red)] text-white text-2xl font-black px-4 py-2 shrink-0">III</span>
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-widest text-[var(--ministry-red)] mb-2">Reward the Logical</h3>
                  <p className="font-mono text-base text-gray-700">When basic civic sense is demonstrated, we celebrate it. The Hall of Heroes exists to honor those who do what should be painfully obvious to everyone else.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="text-center py-12 border-t-4 border-[var(--ministry-red)]">
            <h2 className="text-3xl font-black uppercase tracking-wider mb-6">Are you ready to restore order?</h2>
            <Link href="/join" className="inline-flex items-center gap-3 bg-[var(--ministry-red)] text-white px-8 py-4 font-bold uppercase tracking-widest border-2 border-[var(--ministry-red)] hover:bg-green-900 transition-colors text-lg shadow-xl shadow-green-900/20">
              Enlist as a Field Agent
              <ArrowRight size={24} />
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
