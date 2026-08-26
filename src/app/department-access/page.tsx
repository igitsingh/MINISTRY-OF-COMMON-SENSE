import * as motion from "framer-motion/client";

export default function DepartmentAccess() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-24 w-full h-full min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-center space-y-12 max-w-sm w-full"
      >
        <div className="w-12 h-12 border border-white mx-auto rounded-full flex items-center justify-center animate-spin-slow">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
        
        <form className="space-y-8">
          <input 
            type="password" 
            placeholder="ACCESS CODE"
            className="w-full bg-transparent border-b border-muted text-center py-4 text-white font-mono tracking-[0.5em] focus:outline-none focus:border-white transition-colors placeholder:text-muted/30 uppercase"
          />
        </form>
      </motion.div>
    </div>
  );
}
