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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-xl w-full space-y-8 md:space-y-12 relative z-10"
      >
        <div className="text-left space-y-2 md:space-y-4 border-b-2 md:border-b-4 border-neon pb-4 md:pb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase text-neon">
            EVALUATION PROTOCOL
          </h1>
          <p className="font-bold text-xs md:text-sm text-white uppercase tracking-tighter">
            COMPLETE ALL FIELDS. BE CONCISE.
          </p>
        </div>

        <form action={handleSubmit} className="space-y-8 md:space-y-12 w-full">
          
          <div className="space-y-2 md:space-y-4">
            <label className="block font-bold text-xs md:text-sm uppercase tracking-tighter text-neon leading-relaxed">
              1. What should be common sense but isn't?
            </label>
            <textarea 
              name="q1"
              required
              rows={3}
              disabled={status === "SUBMITTING"}
              className="w-full bg-transparent border-b-2 border-white py-2 md:py-3 text-white font-bold text-base md:text-lg focus:outline-none focus:border-neon transition-colors resize-none disabled:opacity-50"
            />
          </div>

          <div className="space-y-2 md:space-y-4">
            <label className="block font-bold text-xs md:text-sm uppercase tracking-tighter text-neon leading-relaxed">
              2. What is something most people never question?
            </label>
            <textarea 
              name="q2"
              required
              rows={3}
              disabled={status === "SUBMITTING"}
              className="w-full bg-transparent border-b-2 border-white py-2 md:py-3 text-white font-bold text-base md:text-lg focus:outline-none focus:border-neon transition-colors resize-none disabled:opacity-50"
            />
          </div>

          <div className="space-y-2 md:space-y-4">
            <label className="block font-bold text-xs md:text-sm uppercase tracking-tighter text-neon leading-relaxed">
              3. Why do you seek entry?
            </label>
            <textarea 
              name="q3"
              required
              rows={3}
              disabled={status === "SUBMITTING"}
              className="w-full bg-transparent border-b-2 border-white py-2 md:py-3 text-white font-bold text-base md:text-lg focus:outline-none focus:border-neon transition-colors resize-none disabled:opacity-50"
            />
          </div>

          <div className="pt-6 md:pt-8 border-t-2 border-white/20 space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="block font-bold text-xs md:text-sm uppercase tracking-tighter text-neon">NAME</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  disabled={status === "SUBMITTING"}
                  className="w-full bg-transparent border-b-2 border-white py-2 md:py-3 text-white font-bold text-base md:text-lg focus:outline-none focus:border-neon transition-colors disabled:opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-bold text-xs md:text-sm uppercase tracking-tighter text-neon">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  disabled={status === "SUBMITTING"}
                  className="w-full bg-transparent border-b-2 border-white py-2 md:py-3 text-white font-bold text-base md:text-lg focus:outline-none focus:border-neon transition-colors disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {status === "ERROR" && (
            <div className="text-red-500 font-bold text-xs md:text-sm uppercase tracking-tighter text-center border-2 border-red-500 p-3 md:p-4 bg-red-950/20">
              {errorMessage}
            </div>
          )}

          <div className="pt-4 md:pt-8">
            <button 
              type="submit"
              disabled={status === "SUBMITTING"}
              className="w-full pixel-border p-4 md:p-6 font-bold uppercase tracking-tighter text-lg md:text-xl hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-neon"
            >
              {status === "SUBMITTING" ? "TRANSMITTING..." : "SUBMIT EVALUATION"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
