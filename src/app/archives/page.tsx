import * as motion from "framer-motion/client";
import Link from "next/link";

const archives = [
  { id: "001", status: "RESTRICTED" },
  { id: "002", status: "RESTRICTED" },
  { id: "003", status: "RESTRICTED" },
];

export default function Archives() {
  return (
    <div className="flex-1 flex flex-col p-6 md:p-24 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <header className="mb-24">
          <h1 className="text-2xl font-mono uppercase tracking-widest border-b border-muted pb-4 text-muted">
            Archives
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {archives.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <Link 
                href="#"
                className="block border border-muted/50 p-12 hover:border-white transition-colors duration-500"
              >
                <div className="font-mono uppercase tracking-[0.2em] text-xl mb-4">
                  Archive {a.id}
                </div>
                <div className="font-mono text-xs text-red-900 tracking-widest">
                  STATUS: {a.status}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
