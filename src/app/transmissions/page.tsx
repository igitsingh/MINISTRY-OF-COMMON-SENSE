import * as motion from "framer-motion/client";
import Link from "next/link";

const transmissions = [
  { id: "001", date: "CLASSIFIED" },
  { id: "002", date: "CLASSIFIED" },
  { id: "003", date: "CLASSIFIED" },
];

export default function Transmissions() {
  return (
    <div className="flex-1 flex flex-col p-6 md:p-24 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <header className="mb-24">
          <h1 className="text-2xl font-mono uppercase tracking-widest border-b border-muted pb-4">
            Transmissions
          </h1>
        </header>

        <div className="flex flex-col gap-8">
          {transmissions.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <Link 
                href="#"
                className="group flex items-center justify-between border border-muted p-8 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
              >
                <div className="font-mono uppercase tracking-[0.2em]">
                  Transmission #{t.id}
                </div>
                <div className="font-mono text-xs opacity-50 group-hover:opacity-100">
                  {t.date}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
