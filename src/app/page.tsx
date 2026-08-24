"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Medal, AlertTriangle, ArrowRight, BookOpen, Users } from 'lucide-react';
import Header from '@/components/Header';

const bulletins = [
  { id: 1, text: "URGENT: Pothole on MG Road has now developed its own zip code." },
  { id: 2, text: "WARNING: Pedestrians attempting to use footpaths are violating local parking laws." },
  { id: 3, text: "ALERT: Missing garbage bin last seen running away from overflowing trash." }
];

export default function Home() {
  const [bulletinIndex, setBulletinIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBulletinIndex((prev) => (prev + 1) % bulletins.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans">
      {/* HEADER */}
      <Header />

      {/* ROTATING NATIONAL EMERGENCY BULLETIN */}
      <div className="bg-[var(--charcoal)] text-white font-mono text-sm py-3 overflow-hidden border-b-4 border-black relative">
        <div className="w-full px-6 md:px-12 flex items-center">
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-yellow-300 mr-2 md:mr-6 whitespace-nowrap z-10 bg-[var(--charcoal)] md:pr-4">
            <AlertTriangle size={18} className="shrink-0" />
            <span className="hidden sm:inline">National Emergency </span>Bulletin:
          </div>
          <div className="flex-1 relative h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={bulletinIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center font-bold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis block w-full"
              >
                {bulletins[bulletinIndex].text}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <main className="overflow-x-hidden">
        
        {/* MISSION BRIEFING - FULL SCREEN HERO */}
        <section className="md:h-[calc(100vh-160px)] md:min-h-[600px] flex items-center relative overflow-hidden bg-white border-b-8 border-[var(--ministry-red)]">
          {/* Subtle background texture/watermark */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
            <ShieldAlert size={800} />
          </div>

          <div className="w-full px-6 md:px-12 max-w-7xl mx-auto py-0 md:py-10 relative z-10 grid md:grid-cols-2 gap-16 md:gap-12 items-center">
            <div className="space-y-6 min-h-[calc(100vh-140px)] flex flex-col justify-center md:min-h-0 md:block py-10 md:py-0">
              <div className="inline-block bg-[var(--gold)] text-[var(--ministry-red)] font-black uppercase tracking-widest px-4 py-2 border-2 border-black text-sm">
                Public Notice
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-wider text-[var(--ministry-red)] leading-[1.1]">
                Welcome to the Ministry.
              </h2>
              <p className="text-base md:text-xl leading-relaxed font-serif text-gray-700 border-l-4 border-[var(--gold)] pl-6">
                We are India's first civic movement dedicated to documenting the extraordinary lack of common sense in our urban planning, infrastructure, and daily civic life. 
              </p>
              <p className="text-base font-mono text-gray-500">
                We use humor, data, and public shame—with respect—to inspire real-world neighborhood transformation.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link href="/about" className="flex items-center gap-2 border-2 border-[var(--ministry-red)] px-6 py-3 font-bold uppercase tracking-widest hover:bg-[var(--ministry-red)] hover:text-white transition-colors text-lg">
                  <BookOpen size={24} />
                  Read the Manifesto
                </Link>
                <Link href="/join" className="flex items-center gap-2 bg-[var(--ministry-red)] text-white px-6 py-3 font-bold uppercase tracking-widest border-2 border-[var(--ministry-red)] hover:bg-green-900 transition-colors text-lg shadow-xl shadow-green-900/20">
                  <Users size={24} />
                  Become a Field Agent
                </Link>
              </div>
            </div>
            
            <div className="bg-[#f4ebd0] p-6 md:p-10 border-2 border-[#d4c5a9] font-mono text-base relative md:rotate-2 shadow-2xl mt-4 md:mt-0 mb-16 md:mb-0">
              <div className="absolute -top-6 -left-2 md:-left-6 text-[var(--charcoal)] font-bold md:rotate-[-15deg] text-xl md:text-2xl border-4 border-[var(--charcoal)] p-2 bg-white shadow-lg">CONFIDENTIAL</div>
              <h3 className="font-bold text-2xl mb-8 uppercase text-[var(--ministry-red)] border-b-2 border-[#d4c5a9] pb-4">Agent Directives:</h3>
              <ul className="space-y-4 list-none text-gray-800">
                <li className="flex gap-4 items-start">
                  <span className="bg-[var(--ministry-red)] text-white px-2 py-1 text-xs mt-1">1</span>
                  <span>Spot a civic absurdity (e.g. a tree wrapped in concrete).</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="bg-[var(--ministry-red)] text-white px-2 py-1 text-xs mt-1">2</span>
                  <span>Lock in the coordinates via our Satellite System.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="bg-[var(--ministry-red)] text-white px-2 py-1 text-xs mt-1">3</span>
                  <span>Submit visual evidence to the Ministry AI.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="bg-[var(--ministry-red)] text-white px-2 py-1 text-xs mt-1">4</span>
                  <span>Recruit others and earn Civic Hero Awards for fixing problems.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="w-full px-6 md:px-12 max-w-[1400px] mx-auto py-16 md:py-32 space-y-20 md:space-y-40">
          
          {/* INVESTIGATION FILES (Cases) */}
          <section>
            <div className="flex items-center justify-between mb-16 border-b-4 border-[var(--ministry-red)] pb-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <ShieldAlert size={48} className="text-[var(--ministry-red)] shrink-0" />
                <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-wider text-[var(--ministry-red)]">Active Investigation Files</h2>
              </div>
              <Link href="/cases" className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest hover:text-[var(--gold)] transition-colors">
                View All Files <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              
              {/* CASE 1 */}
              <div className="relative bg-[#f4ebd0] p-6 md:p-8 rounded shadow-2xl border-l-[12px] md:border-l-[24px] border-[#d4c5a9] md:rotate-1 md:hover:rotate-0 transition-transform duration-300">
                <div className="absolute top-4 right-4 md:top-6 md:right-6 border-4 border-[var(--charcoal)] text-[var(--charcoal)] font-black uppercase tracking-widest px-2 py-1 text-xs md:text-2xl md:rotate-[-15deg] opacity-80">
                  Classified
                </div>
                <div className="border-b-2 border-[#d4c5a9] pb-6 mb-6 mt-4">
                  <div className="font-mono text-base font-bold text-gray-500">FILE #8472</div>
                  <h3 className="text-3xl font-serif font-bold mt-2 font-black leading-tight">Operation: The Invisible Footpath</h3>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="w-full bg-gray-300 border-2 border-dashed border-gray-400 min-h-[200px] flex items-center justify-center text-sm font-mono text-gray-500 p-4 text-center">
                    [EVIDENCE PHOTO MISSING]
                  </div>
                  <div className="space-y-6">
                    <p className="font-mono text-base leading-relaxed text-gray-800">
                      SUBJECT: Footpath completely blocked by parked vehicles and construction debris. Pedestrians forced to merge with highway traffic.
                    </p>
                    <div className="bg-gray-200 border-2 border-gray-400 p-4 font-mono rounded">
                      <span className="font-bold text-[var(--charcoal)] text-lg">COMMON SENSE SCORE: 4/100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CASE 2 */}
              <div className="relative bg-[#f4ebd0] p-6 md:p-8 rounded shadow-2xl border-l-[12px] md:border-l-[24px] border-[#d4c5a9] md:-rotate-1 md:hover:rotate-0 transition-transform duration-300">
                <div className="absolute top-4 right-4 md:top-6 md:right-6 border-4 border-[var(--charcoal)] text-[var(--charcoal)] font-black uppercase tracking-widest px-2 py-1 text-xs md:text-2xl md:rotate-[-15deg] opacity-80">
                  Classified
                </div>
                <div className="border-b-2 border-[#d4c5a9] pb-6 mb-6 mt-4">
                  <div className="font-mono text-base font-bold text-gray-500">FILE #8473</div>
                  <h3 className="text-3xl font-serif font-bold mt-2 font-black leading-tight">Operation: Everest of Garbage</h3>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="w-full bg-gray-300 border-2 border-dashed border-gray-400 min-h-[200px] flex items-center justify-center text-sm font-mono text-gray-500 p-4 text-center">
                    [EVIDENCE PHOTO MISSING]
                  </div>
                  <div className="space-y-6">
                    <p className="font-mono text-base leading-relaxed text-gray-800">
                      SUBJECT: Overflowing community bin has successfully evolved into a local landmark. Small ecosystem forming.
                    </p>
                    <div className="bg-gray-200 border-2 border-gray-400 p-4 font-mono rounded">
                      <span className="font-bold text-[var(--charcoal)] text-lg">COMMON SENSE SCORE: 2/100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CASE 3 */}
              <div className="relative bg-[#f4ebd0] p-6 md:p-8 rounded shadow-2xl border-l-[12px] md:border-l-[24px] border-[#d4c5a9] md:rotate-1 md:hover:rotate-0 transition-transform duration-300">
                <div className="absolute top-4 right-4 md:top-6 md:right-6 border-4 border-[var(--charcoal)] text-[var(--charcoal)] font-black uppercase tracking-widest px-2 py-1 text-xs md:text-2xl md:rotate-[-15deg] opacity-80">
                  Classified
                </div>
                <div className="border-b-2 border-[#d4c5a9] pb-6 mb-6 mt-4">
                  <div className="font-mono text-base font-bold text-gray-500">FILE #8474</div>
                  <h3 className="text-3xl font-serif font-bold mt-2 font-black leading-tight">Operation: Pothole or Portal?</h3>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="w-full bg-gray-300 border-2 border-dashed border-gray-400 min-h-[200px] flex items-center justify-center text-sm font-mono text-gray-500 p-4 text-center">
                    [EVIDENCE PHOTO MISSING]
                  </div>
                  <div className="space-y-6">
                    <p className="font-mono text-base leading-relaxed text-gray-800">
                      SUBJECT: Crater on main road suspected to lead to another dimension. Local mechanic reports record profits.
                    </p>
                    <div className="bg-gray-200 border-2 border-gray-400 p-4 font-mono rounded">
                      <span className="font-bold text-[var(--charcoal)] text-lg">COMMON SENSE SCORE: 8/100</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* HALL OF HEROES & AWARDS */}
          <div className="grid lg:grid-cols-2 gap-20">
            {/* HALL OF HEROES */}
            <section>
              <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10 border-b-4 border-[var(--gold)] pb-4">
                <Medal size={40} className="text-[var(--gold)] shrink-0" />
                <h2 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-wider">Hall of Heroes</h2>
              </div>
              <div className="bg-[var(--ministry-red)] text-[var(--ivory)] p-10 rounded shadow-2xl">
                <ul className="space-y-8 font-mono">
                  <li className="border-b-2 border-white/10 pb-8">
                    <div className="font-bold text-[var(--gold)] text-2xl mb-2">Agent Sharma</div>
                    <div className="text-base opacity-90 leading-relaxed">Successfully disposed of a wrapper IN the dustbin. Witnesses reportedly gasped.</div>
                  </li>
                  <li>
                    <div className="font-bold text-[var(--gold)] text-2xl mb-2">Sector 14 Residents</div>
                    <div className="text-base opacity-90 leading-relaxed">Planted 50 trees without taking a single selfie. Incident currently under investigation.</div>
                  </li>
                </ul>
                <button className="mt-8 w-full border-2 border-[var(--gold)] text-[var(--gold)] py-4 font-bold uppercase tracking-widest hover:bg-[var(--gold)] hover:text-[var(--ministry-red)] transition-colors">
                  View Full Roster
                </button>
              </div>
            </section>

            {/* LATEST AWARDS */}
            <section>
              <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10 border-b-4 border-[var(--charcoal)] pb-4">
                <h2 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-wider">Common Sense Awards</h2>
              </div>
              <div className="space-y-6">
                <div className="border-4 border-[var(--charcoal)] p-8 flex items-center justify-between hover:bg-[var(--charcoal)] hover:text-white transition-colors cursor-pointer group">
                  <div>
                    <div className="font-bold uppercase tracking-widest text-sm text-gray-500 group-hover:text-gray-300">Most Walkable Street</div>
                    <div className="font-serif text-3xl font-bold mt-2">MG Road, Ward 4</div>
                  </div>
                  <ArrowRight size={32} />
                </div>
                <div className="border-4 border-[var(--charcoal)] p-8 flex items-center justify-between hover:bg-[var(--charcoal)] hover:text-white transition-colors cursor-pointer group">
                  <div>
                    <div className="font-bold uppercase tracking-widest text-sm text-gray-500 group-hover:text-gray-300">Cleanest Market</div>
                    <div className="font-serif text-3xl font-bold mt-2">Central Plaza</div>
                  </div>
                  <ArrowRight size={32} />
                </div>
              </div>
            </section>
          </div>

        </div>

        {/* NATIONAL CASE ARCHIVE (SCROLLING) */}
        <section className="border-t-[8px] border-[var(--charcoal)] pt-20 pb-20 bg-gray-100 overflow-hidden">
          <div className="text-center mb-12 px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-wider mb-4">National Case Archive</h2>
            <p className="font-mono text-xs md:text-base text-gray-600 uppercase tracking-widest">A historical record of things we shouldn't have to document.</p>
          </div>
          
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              className="flex space-x-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="w-[300px] md:w-[400px] border-2 border-gray-300 bg-white p-6 shrink-0 shadow-lg">
                  <div className="text-sm font-mono font-bold text-gray-400 mb-4 uppercase tracking-widest border-b pb-2">ARCHIVE #{900 + i}</div>
                  <div className="h-32 bg-gray-100 mb-6 border-2 border-gray-200 flex items-center justify-center text-gray-400 font-mono text-sm">
                    [REDACTED]
                  </div>
                  <div className="font-bold font-serif text-2xl leading-tight">Case of the Missing Zebra Crossing</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
