"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as motion from "framer-motion/client";
import { submitEvaluation } from "./actions";

export default function Evaluation() {
  const router = useRouter();
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "ERROR">("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("SUBMITTING");
    setErrorMessage("");
    
    const result = await submitEvaluation(formData);
    
    if (result.error) {
      setStatus("ERROR");
      setErrorMessage(result.error);
    } else if (result.success && result.candidate_number) {
      // Redirect to Waiting Room (Candidate Dashboard)
      router.push(`/candidate/${result.candidate_number}`);
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-24 w-full bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <motion.div 
        className="max-w-6xl w-full relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <form action={handleSubmit} className="w-full h-full flex flex-col justify-center">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Header & First Two Questions */}
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-2 md:space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white">
                  EVALUATION PROTOCOL
                </h1>
                <p className="font-bold text-[10px] md:text-xs text-gray-400 font-[family-name:var(--font-mono)] uppercase tracking-widest border-b-4 border-white pb-4 md:pb-6">
                  COMPLETE ALL FIELDS. BE CONCISE.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-2 group">
                  <label htmlFor="q1" className="block text-[10px] md:text-xs font-[family-name:var(--font-mono)] font-bold text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">
                    1. WHAT SHOULD BE COMMON SENSE BUT ISN'T? <span className="text-neon">*</span>
                  </label>
                  <textarea 
                    id="q1"
                    name="q1"
                    required
                    disabled={status === "SUBMITTING"}
                    className="w-full bg-transparent border-b-2 border-white/20 p-2 md:p-4 text-white font-[family-name:var(--font-sans)] text-sm md:text-base focus:outline-none focus:border-white focus:bg-white/5 transition-all resize-none h-20 md:h-24 disabled:opacity-50"
                  ></textarea>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="q2" className="block text-[10px] md:text-xs font-[family-name:var(--font-mono)] font-bold text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">
                    2. WHAT IS SOMETHING MOST PEOPLE NEVER QUESTION? <span className="text-neon">*</span>
                  </label>
                  <textarea 
                    id="q2"
                    name="q2"
                    required
                    disabled={status === "SUBMITTING"}
                    className="w-full bg-transparent border-b-2 border-white/20 p-2 md:p-4 text-white font-[family-name:var(--font-sans)] text-sm md:text-base focus:outline-none focus:border-white focus:bg-white/5 transition-all resize-none h-20 md:h-24 disabled:opacity-50"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Right Column: Third Question & Submission */}
            <div className="space-y-8 md:space-y-12 flex flex-col h-full md:pt-20">
              
              <div className="space-y-2 group">
                <label htmlFor="q3" className="block text-[10px] md:text-xs font-[family-name:var(--font-mono)] font-bold text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">
                  3. WHY DO YOU SEEK ENTRY? <span className="text-neon">*</span>
                </label>
                <textarea 
                  id="q3"
                  name="q3"
                  required
                  disabled={status === "SUBMITTING"}
                  className="w-full bg-transparent border-b-2 border-white/20 p-2 md:p-4 text-white font-[family-name:var(--font-sans)] text-sm md:text-base focus:outline-none focus:border-white focus:bg-white/5 transition-all resize-none h-20 md:h-24 disabled:opacity-50"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="name" className="block text-[10px] md:text-xs font-[family-name:var(--font-mono)] font-bold text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">
                    NAME <span className="text-neon">*</span>
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={status === "SUBMITTING"}
                    className="w-full bg-transparent border-b-2 border-white/20 p-2 md:p-4 text-white font-[family-name:var(--font-sans)] text-sm md:text-base focus:outline-none focus:border-white focus:bg-white/5 transition-all disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="email" className="block text-[10px] md:text-xs font-[family-name:var(--font-mono)] font-bold text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">
                    EMAIL ADDRESS <span className="text-neon">*</span>
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status === "SUBMITTING"}
                    className="w-full bg-transparent border-b-2 border-white/20 p-2 md:p-4 text-white font-[family-name:var(--font-sans)] text-sm md:text-base focus:outline-none focus:border-white focus:bg-white/5 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="pt-4 mt-auto">
                {status === "ERROR" && (
                  <div className="text-red-500 font-bold text-xs md:text-sm uppercase tracking-tighter text-center border-2 border-red-500 p-3 md:p-4 bg-red-950/20 mb-4">
                    {errorMessage}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={status === "SUBMITTING"}
                  className="w-full mocs-button p-4 md:p-6 text-sm md:text-base font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "SUBMITTING" ? '[ TRANSMITTING ]' : '[ SUBMIT EVALUATION ]'}
                </button>
              </div>

            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
