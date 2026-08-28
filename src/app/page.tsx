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
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase text-white font-[family-name:var(--font-brand)] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  MINISTRY <span className="text-[#e1127d] [text-shadow:4px_4px_0_#29b9e5]">OF</span><br /> <span className="whitespace-nowrap">COMMON SENSE</span>
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
                    Article I — Why The Ministry Exists
                  </h2>
                  <div className="space-y-3 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <p>The world does not suffer from a lack of information.</p>
                    <p className="text-white font-bold">It suffers from a lack of judgment.</p>
                    <p>Every day, people are told what to think, what to buy, what to wear, and what to believe.</p>
                    <p>Common sense, once ordinary, has become increasingly rare.</p>
                    <p>The Ministry exists to recognize, reward, and preserve independent thought.</p>
                    <div className="pt-2 font-[family-name:var(--font-mono)] text-[10px] md:text-xs uppercase text-gray-400 space-y-1">
                      <p>Not expertise.</p>
                      <p>Not credentials.</p>
                      <p>Not popularity.</p>
                      <p className="text-neon font-bold text-xs md:text-sm pt-1">Common sense.</p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white border-l-2 border-neon pl-4">
                    Article II — The Problem We Are Solving
                  </h2>
                  <div className="space-y-3 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <p>Modern culture rewards attention.</p>
                    <p className="text-white font-bold">The Ministry rewards discernment.</p>
                    <p>We believe the most valuable people are often not the loudest people.</p>
                    <p>They are the observers. The builders. The thinkers.</p>
                    <p>The people who notice what others ignore.</p>
                    <p>The Ministry exists to create products, experiences, and communities for those individuals.</p>
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
                  Article III — What We Believe
                </h2>
                <div className="space-y-6 md:space-y-8 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">1. Common Sense Is Uncommon</h3>
                    <p>The obvious is often ignored. The simple is often overlooked. The Ministry values clarity over complexity.</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">2. Quality Over Quantity</h3>
                    <p>More is not always better. Better is better. Every release should feel intentional.</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">3. Rarity Creates Meaning</h3>
                    <p>Not everyone should own everything. Not every product should be endlessly available. Scarcity is not a marketing tactic. It is respect for craftsmanship.</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">4. Membership Is Earned</h3>
                    <p>Access should not be automatic. The Ministry does not chase people. People seek the Ministry.</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase font-bold tracking-widest">5. Independent Thinking Matters</h3>
                    <p>We respect disagreement. We respect curiosity. We respect people who question assumptions. Blind conformity has no value here.</p>
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
                    Article IV — Who Belongs Here
                  </h2>
                  <div className="space-y-4 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <ul className="list-disc pl-4 space-y-2 marker:text-neon">
                      <li>Think before speaking.</li>
                      <li>Value substance over noise.</li>
                      <li>Appreciate quality.</li>
                      <li>Prefer originality over imitation.</li>
                      <li>Understand that access must be earned.</li>
                      <li>Express themselves through what they create, wear, and contribute.</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-gray-500 border-l-2 border-gray-600 pl-4">
                    Article V — Who Does Not Belong Here
                  </h2>
                  <div className="space-y-4 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-500 line-through decoration-gray-700">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>People seeking validation.</li>
                      <li>People seeking status without contribution.</li>
                      <li>People who believe access is owed to them.</li>
                      <li>People who confuse attention with value.</li>
                      <li>People who expect entry simply because they asked for it.</li>
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
                    Article VI — What Acceptance Means
                  </h2>
                  <div className="space-y-3 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <p>Acceptance is not admission into a secret club.</p>
                    <p className="text-white font-bold">Acceptance is recognition.</p>
                    <p>It means the Ministry believes you align with its values.</p>
                    <p>Accepted candidates become <span className="text-neon font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">Founding Members</span>.</p>
                    
                    <div className="pt-2 space-y-2">
                      <p className="text-gray-400 font-[family-name:var(--font-mono)] text-[10px] md:text-xs uppercase">Founding Members receive:</p>
                      <ul className="list-disc pl-4 space-y-1 text-xs md:text-sm">
                        <li>Early access.</li>
                        <li>Voting rights on selected initiatives.</li>
                        <li>Ownership participation through founding allocations.</li>
                        <li>Permanent recognition within the Ministry archive.</li>
                      </ul>
                    </div>
                    <p className="pt-2 italic text-xs md:text-sm text-gray-400">Membership is earned once. Its value should increase over time.</p>
                  </div>
                </section>

                <section className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white border-l-2 border-neon pl-4">
                    Article VII — What The Ministry Creates
                  </h2>
                  <div className="space-y-4 leading-relaxed pl-4 md:pl-6 text-sm md:text-base border-l border-white/10 text-gray-300">
                    <p>The Ministry creates cultural artifacts. These may take many forms:</p>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs text-gray-400 uppercase tracking-widest leading-loose">
                      Clothing // Objects // Publications // Experiences // Events // Collaborations
                    </p>
                    <div className="pt-4 space-y-2">
                      <p>Every artifact must embody the Ministry's principles:</p>
                      <p className="text-white font-bold font-[family-name:var(--font-mono)] uppercase tracking-widest text-xs md:text-sm leading-relaxed">
                        Quality. <br/>Rarity. <br/>Purpose.
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
                  Article VIII — Long-Term Mission
                </h2>
                <div className="space-y-4 leading-relaxed text-sm md:text-base text-gray-300">
                  <p>The goal is not merely to sell clothing.</p>
                  <p className="text-white font-bold">The goal is to build the world's most respected institution for independent thinkers.</p>
                  <p>A symbol recognized globally. A mark of quality. A mark of discernment. A mark of common sense.</p>
                  <p className="pt-4">One day, seeing someone wearing the Ministry in New York, London, Tokyo, Mumbai, or Dubai should mean something.</p>
                  <p>Not because it is expensive.</p>
                  <p className="text-neon font-[family-name:var(--font-brand)] text-xl md:text-3xl uppercase tracking-tighter pt-4">Because it is earned.</p>
                </div>
              </section>

              <div className="pt-12 w-full">
                <div className="font-[family-name:var(--font-sans)] font-bold text-gray-500 uppercase tracking-widest text-[10px] md:text-xs mb-4">
                  THE BRAND THESIS
                </div>
                <div className="text-white text-sm md:text-lg font-[family-name:var(--font-sans)] tracking-tight leading-relaxed max-w-2xl mx-auto">
                  "The Ministry of Common Sense is an institution built for people who think for themselves."
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
