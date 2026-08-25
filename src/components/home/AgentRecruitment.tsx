import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function AgentRecruitment() {
  return (
    <section className="bg-[var(--charcoal)] text-white py-24 border-b-8 border-[var(--ministry-red)] relative">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-[var(--ministry-red)] text-white font-mono font-bold text-xs px-3 py-1 mb-6 uppercase tracking-widest">
            <ShieldCheck size={16} /> Enlistment Open
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black uppercase text-[var(--gold)] leading-none tracking-tighter mb-8">
            Become An Agent Of Common Sense
          </h2>
          
          <div className="space-y-4 font-mono text-lg mb-12 border-l-4 border-[var(--gold)] pl-6">
            <p>We are not looking for volunteers.</p>
            <p>We are looking for <span className="font-bold text-white bg-black px-1">Agents.</span></p>
          </div>

          <Link href="/agents" className="inline-block bg-white text-black font-black uppercase tracking-widest text-lg px-10 py-5 border-4 border-transparent shadow-[8px_8px_0_0_var(--ministry-red)] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_var(--ministry-red)] hover:bg-gray-200 transition-all">
            Apply As Agent
          </Link>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-black border-4 border-[var(--gold)] p-8">
            <h3 className="font-black text-2xl uppercase tracking-widest mb-6 border-b-2 border-white/20 pb-4 text-[var(--ministry-red)]">Responsibilities</h3>
            <ul className="space-y-6 font-mono">
              <li className="flex items-start gap-4">
                <span className="text-[var(--gold)] text-xl leading-none">01</span>
                <div>
                  <strong className="text-white block uppercase tracking-widest">Document Problems</strong>
                  <span className="text-gray-400 text-sm">Upload verifiable evidence of civic failures.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--gold)] text-xl leading-none">02</span>
                <div>
                  <strong className="text-white block uppercase tracking-widest">Verify Evidence</strong>
                  <span className="text-gray-400 text-sm">Review and confirm reports from other citizens.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--gold)] text-xl leading-none">03</span>
                <div>
                  <strong className="text-white block uppercase tracking-widest">Track Fixes</strong>
                  <span className="text-gray-400 text-sm">Follow up on resolutions and upload "After" photos.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[var(--gold)] text-xl leading-none">04</span>
                <div>
                  <strong className="text-white block uppercase tracking-widest">Inspire Others</strong>
                  <span className="text-gray-400 text-sm">Lead your neighbourhood by example.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
