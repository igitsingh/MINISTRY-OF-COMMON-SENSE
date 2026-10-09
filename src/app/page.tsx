"use client";

import { useState } from "react";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-24 text-center min-h-[100dvh] bg-black overflow-hidden relative">
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Gradient on all 4 sides using inset shadow */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(255,0,255,0.15)]"></div>
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')] fixed"></div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-12 relative z-10 w-full justify-center h-full min-h-[60vh]">
        <AnimatePresence mode="wait">
          
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit="exit"
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-12 w-full flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="space-y-2 md:space-y-4"
              >
                <h1 
                  className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase text-white font-[family-name:var(--font-brand)] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  {"MINISTRY ".split('').map((char, i) => {
                    const dist = Math.abs(i - 5) / 5;
                    const scale = 1 + Math.max(0, 1 - dist * dist) * 0.8;
                    return (
                      <span key={`l1-${i}`} style={{ fontSize: `${scale}em`, verticalAlign: 'middle', display: 'inline-block', lineHeight: 1 }}>
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    );
                  })}
                  <span className="text-[#e1127d] [text-shadow:4px_4px_0_#29b9e5]">
                    {"OF".split('').map((char, i) => {
                      const dist = Math.abs((i + 9) - 5) / 5;
                      const scale = 1 + Math.max(0, 1 - dist * dist) * 0.8;
                      return (
                        <span key={`of-${i}`} style={{ fontSize: `${scale}em`, verticalAlign: 'middle', display: 'inline-block', lineHeight: 1 }}>
                          {char}
                        </span>
                      );
                    })}
                  </span>
                  <br /> <span className="whitespace-nowrap">
                    {"COMMON SENSE".split('').map((char, i) => {
                      const dist = Math.abs(i - 5.5) / 5.5;
                      const scale = 1 + Math.max(0, 1 - dist * dist) * 0.8;
                      return (
                        <span key={`l2-${i}`} style={{ fontSize: `${scale}em`, verticalAlign: 'middle', display: 'inline-block', lineHeight: 1 }}>
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      );
                    })}
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="space-y-4 md:space-y-6 max-w-lg mx-auto"
              >
                <h2 className="font-bold text-xs md:text-sm text-neon font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] mb-4">
                  INTAKE: ACTIVE
                </h2>
                <p className="font-[family-name:var(--font-sans)] font-bold text-xs md:text-sm text-gray-400 uppercase tracking-widest leading-relaxed">
                  Common sense is becoming uncommon.
                  <br/><br/>
                  <span className="text-gray-500 text-[10px] md:text-xs">The Ministry exists for those who still possess it.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.5, type: "spring", bounce: 0.5 }}
                className="pt-4 md:pt-8 w-full px-6 md:px-0 flex justify-center"
              >
                <button 
                  onClick={nextStep}
                  className="mocs-button font-[family-name:var(--font-mono)] px-8 py-4 w-full md:w-auto text-center text-sm sm:text-lg font-bold uppercase tracking-widest"
                >
                  [ REQUEST ENTRY ]
                </button>
              </motion.div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="space-y-12 md:space-y-16 w-full text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <section className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white border-l-2 border-neon pl-4">
                    Article I — Why We Exist
                  </h2>
                  <div className="space-y-3 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <p>Duniya mein gyaan bohot hai, common sense ki bhayankar kami hai.</p>
                    <p>Everyone's basically a sheep copying influencers. We're just here to reward people who actually use their brains.</p>
                    <p className="text-neon font-bold pt-2 text-xs md:text-sm">NO DEGREES NEEDED. JUST DON'T BE STUPID.</p>
                  </div>
                </section>

                <section className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white border-l-2 border-neon pl-4">
                    Article II — The Problem
                  </h2>
                  <div className="space-y-3 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <p>Internet clout is a disease, bro. We don't care about your follower count.</p>
                    <p>We care about the quiet builders who notice stuff.</p>
                    <p className="text-white font-bold pt-2">We make cool shit just for them. Simple.</p>
                  </div>
                </section>
              </div>

              <div className="flex justify-center pt-8 border-t border-white/10">
                <button onClick={nextStep} className="mocs-button font-[family-name:var(--font-mono)] px-8 py-4 text-sm font-bold uppercase tracking-widest">
                  [ PROCEED TO ARTICLE III ]
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-12 w-full max-w-3xl mx-auto text-left"
            >
              <section className="space-y-6">
                <h2 className="text-xl md:text-3xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white border-l-2 border-neon pl-4">
                  Article III — The Vibe Check
                </h2>
                <div className="space-y-6 md:space-y-8 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">1. Common Sense Is Ded</h3>
                    <p>Obvious cheezein bhi logo ko samjhani padti hai aaj kal. We keep it simple.</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">2. Quality &gt; Quantity</h3>
                    <p>Faltu ka kachra nahi banayenge. Better is better.</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">3. FOMO is Valid</h3>
                    <p>Not everyone gets everything. Deal with it.</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">4. VIP Access Only</h3>
                    <p>"Bhai ek invite dede" won't work. You gotta earn it.</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">5. Think For Yourself</h3>
                    <p>"Yes sir" bolne walo ki zaroorat nahi hai. Bring your own brain.</p>
                  </div>
                </div>
              </section>

              <div className="flex justify-center pt-8 border-t border-white/10">
                <button onClick={nextStep} className="mocs-button font-[family-name:var(--font-mono)] px-8 py-4 text-sm font-bold uppercase tracking-widest">
                  [ PROCEED ]
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="space-y-12 md:space-y-16 w-full text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <section className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white border-l-2 border-neon pl-4">
                    Article IV — Who's Invited
                  </h2>
                  <div className="space-y-4 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <ul className="list-disc pl-4 space-y-2 marker:text-neon">
                      <li>Log jo bolne se pehle sochte hain.</li>
                      <li>Jinko asli, original stuff pasand hai.</li>
                      <li>Jo samajhte hain ki entry free nahi hai.</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-gray-500 border-l-2 border-gray-600 pl-4">
                    Article V — Who Can Stay Out
                  </h2>
                  <div className="space-y-4 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-500 line-through decoration-gray-700">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Blue tick ke deewane.</li>
                      <li>"Bhai, janta nahi mera baap kaun hai?" crowd.</li>
                      <li>Clout chasers & attention seekers.</li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="flex justify-center pt-8 border-t border-white/10">
                <button onClick={nextStep} className="mocs-button font-[family-name:var(--font-mono)] px-8 py-4 text-sm font-bold uppercase tracking-widest">
                  [ PROCEED ]
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step-4"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="space-y-12 md:space-y-16 w-full text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <section className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white border-l-2 border-neon pl-4">
                    Article VI — The Perks
                  </h2>
                  <div className="space-y-3 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <p>It's not an Illuminati cult, bro. It just means you passed the vibe check.</p>
                    <p>You become a <span className="text-neon font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">Founding Member</span>.</p>
                    
                    <div className="pt-2 space-y-2">
                      <p className="text-gray-400 font-[family-name:var(--font-mono)] text-[10px] md:text-xs uppercase">What you get:</p>
                      <ul className="list-disc pl-4 space-y-1 text-xs md:text-sm">
                        <li>Early access to everything.</li>
                        <li>Voting rights (flex).</li>
                        <li>Basically bragging rights that appreciate over time.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white border-l-2 border-neon pl-4">
                    Article VII — The Merch
                  </h2>
                  <div className="space-y-4 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <p>Hum kya banate hain? Cultural artifacts.</p>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs text-gray-400 uppercase tracking-widest leading-loose">
                      KAPDE // GADGETS // EVENTS // RANDOM COOL SHIT
                    </p>
                    <div className="pt-4 space-y-2">
                      <p>Teen strict rules:</p>
                      <p className="text-white font-bold font-[family-name:var(--font-mono)] uppercase tracking-widest text-xs md:text-sm leading-relaxed">
                        Top tier quality. <br/>Aasani se na mile. <br/>Makes absolute sense.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="flex justify-center pt-8 border-t border-white/10">
                <button onClick={nextStep} className="mocs-button font-[family-name:var(--font-mono)] px-8 py-4 text-sm font-bold uppercase tracking-widest">
                  [ PROCEED TO ARTICLE VIII ]
                </button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step-5"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="space-y-12 md:space-y-16 w-full max-w-3xl mx-auto flex flex-col items-center text-center"
            >
              <section className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white pb-6 border-b-2 border-white/20">
                  Article VIII — The Endgame
                </h2>
                <div className="space-y-4 leading-relaxed text-sm md:text-base text-gray-300">
                  <p>T-shirts bechna endgame nahi hai bhai.</p>
                  <p className="text-white font-bold">We want to build a global cult for independent thinkers.</p>
                  <p className="pt-4">Agar kal koi hamara merch pehne in NYC, London or Mumbai, it should scream <i>"This guy gets it."</i></p>
                  <p>Not because it's expensive.</p>
                  <p className="text-neon font-[family-name:var(--font-brand)] text-xl md:text-3xl uppercase tracking-tighter pt-4">BECAUSE THEY EARNED IT.</p>
                </div>
              </section>

              <div className="pt-12 w-full">
                <div className="font-[family-name:var(--font-sans)] font-bold text-gray-500 uppercase tracking-widest text-[10px] md:text-xs mb-4">
                  TL;DR
                </div>
                <div className="text-white text-sm md:text-lg font-[family-name:var(--font-sans)] tracking-tight leading-relaxed max-w-2xl mx-auto">
                  "A brand for people who actually use their brains."
                </div>
              </div>

              <div className="flex justify-center pt-12 border-t border-white/10 w-full">
                <Link href="/entry-protocol">
                  <button className="mocs-button font-[family-name:var(--font-mono)] px-8 py-4 text-sm font-bold uppercase tracking-widest">
                    [ ACKNOWLEDGE & PROCEED ]
                  </button>
                </Link>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
