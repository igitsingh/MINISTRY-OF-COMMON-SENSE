import * as motion from "framer-motion/client";

export default function Recruitment() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-24 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-md w-full space-y-16"
      >
        <div className="text-center space-y-4">
          <h1 className="font-mono text-sm tracking-[0.3em] uppercase text-muted">
            Recruitment Status
          </h1>
          <div className="font-mono text-xl tracking-[0.4em] uppercase text-white animate-pulse">
            Open
          </div>
        </div>

        <form className="space-y-8">
          <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-widest text-muted">Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-muted py-2 text-white font-sans focus:outline-none focus:border-white transition-colors"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-widest text-muted">Email</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-muted py-2 text-white font-sans focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-mono text-xs uppercase tracking-widest text-muted">Reason For Entry</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-muted py-2 text-white font-sans focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          <button 
            type="button"
            className="w-full border border-white p-4 font-mono uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-colors duration-300"
          >
            Submit Application
          </button>
        </form>
      </motion.div>
    </div>
  );
}
