import * as motion from "framer-motion/client";
import Image from "next/image";

const records = [
  {
    id: "001",
    label: "OBSERVATION",
    text1: "People have become experts at complicated things.",
    text2: "Nobody knows simple things anymore.",
  },
  {
    id: "002",
    label: "OBSERVATION",
    text1: "The world rewards noise.",
    text2: "Common sense is silent.",
  },
  {
    id: "003",
    label: "OBSERVATION",
    text1: "The obvious has become controversial.",
    text2: "",
  }
];

export default function Records() {
  return (
    <div className="flex-1 flex flex-col bg-black text-white w-full overflow-x-hidden">
      {/* Records section */}
      {records.map((record, index) => (
        <section 
          key={record.id} 
          className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24 text-center border-b-4 border-neon"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-16"
          >
            <div className="pixel-border inline-block px-4 py-2 mb-8">
              <p className="text-xl md:text-2xl font-bold uppercase tracking-tighter">
                MINISTRY RECORD #{record.id}
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-3xl md:text-6xl font-bold tracking-tight leading-none text-neon uppercase">
                {record.text1}
              </p>
              {record.text2 && (
                <p className="text-3xl md:text-6xl font-bold tracking-tight leading-none text-white uppercase">
                  {record.text2}
                </p>
              )}
            </div>
          </motion.div>
        </section>
      ))}

      {/* Artifact Reveal section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24 text-center pt-32 pb-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto space-y-16 w-full"
        >
          <div className="bracket-box p-6 inline-block mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">OFFICIAL UNIFORM</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-neon uppercase tracking-tighter mt-2">MINISTRY ISSUE #001</h3>
          </div>

          <div className="relative w-full aspect-[4/3] max-w-3xl mx-auto border-8 border-neon p-2 md:p-4 bg-black overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
            <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/ministry-issue-001.jpg" 
                alt="Ministry Issue 001 - Official Uniform"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:100%_6px] pointer-events-none mix-blend-screen"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
