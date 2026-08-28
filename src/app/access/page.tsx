"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { verifyAccessKey } from "./actions";
import * as motion from "framer-motion/client";

export default function AccessGate() {
  const router = useRouter();
  const [status, setStatus] = useState<"IDLE" | "VERIFYING" | "ERROR">("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("VERIFYING");
    setErrorMessage("");
    
    const result = await verifyAccessKey(formData);
    
    if (result.error) {
      setStatus("ERROR");
      setErrorMessage(result.error);
    } else if (result.success) {
      router.push("/portal");
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 w-full bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm space-y-6 md:space-y-8 relative z-10 px-4 md:px-0"
      >
        <div className="text-center pb-6 md:pb-8 border-b-2 md:border-b-4 border-white">
          <h1 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white">
            PORTAL ACCESS
          </h1>
        </div>

        <form action={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="space-y-2 text-center">
            <input 
              type="text" 
              name="access_key"
              required
              placeholder="[ ENTER MEMBER ID OR KEY ]"
              disabled={status === "VERIFYING"}
              className="w-full bg-transparent border-2 border-white/50 p-4 md:p-6 text-center text-white font-[family-name:var(--font-mono)] font-bold text-base md:text-lg tracking-widest focus:outline-none focus:border-white transition-colors uppercase placeholder:text-gray-700 disabled:opacity-50"
            />
          </div>

          {status === "ERROR" && (
            <div className="text-red-500 font-bold text-xs md:text-sm uppercase tracking-tighter text-center animate-pulse bg-red-950/20 border-2 border-red-500 p-2 md:p-3">
              {errorMessage}
            </div>
          )}

          <div className="pt-2 md:pt-4">
            <button 
              type="submit"
              disabled={status === "VERIFYING"}
              className="w-full mocs-button p-4 md:p-6 font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-lg md:text-xl disabled:opacity-50"
            >
              {status === "VERIFYING" ? "VERIFYING..." : "ENTER"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
