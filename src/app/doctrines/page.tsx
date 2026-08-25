import Header from '@/components/Header';
import { ShieldAlert, Fingerprint } from 'lucide-react';
import Link from 'next/link';

export default function DoctrinesPage() {
  const doctrines = [
    {
      num: "I",
      title: "Fix what everyone sees first.",
      desc: "Visible improvements build trust faster than invisible master plans."
    },
    {
      num: "II",
      title: "Small neglect becomes large neglect.",
      desc: "Also known as the Broken Windows Theory. Fix the small things before they snowball."
    },
    {
      num: "III",
      title: "Data before outrage.",
      desc: "Do not complain without evidence. Document the exact location, take a clear photo, and report."
    },
    {
      num: "IV",
      title: "Evidence before accusation.",
      desc: "Blame is useless. Proof is undeniable. Bring proof."
    },
    {
      num: "V",
      title: "Public spaces deserve public pride.",
      desc: "The street outside your home is just as much yours as your living room."
    },
    {
      num: "VI",
      title: "Common Sense > Political Noise",
      desc: "A broken dustbin is not a left-wing or right-wing issue. It is a broken dustbin."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans">
      <Header />

      <div className="bg-red-700 text-white font-mono text-sm py-2 overflow-hidden border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-yellow-300">
            <ShieldAlert size={16} />
            CRITICAL DOCTRINE FILE #002
            <ShieldAlert size={16} />
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto p-6 md:p-12 mt-4">
        
        <div className="mb-16 text-center border-b-8 border-black pb-8">
          <h1 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter text-[var(--charcoal)] leading-none mb-6 flex items-center justify-center gap-6">
            <Fingerprint size={64} className="text-[var(--ministry-red)]" />
            Ministry Doctrines
          </h1>
          <p className="text-xl md:text-2xl font-mono text-gray-700 max-w-2xl mx-auto border-4 border-black p-4 bg-white shadow-[8px_8px_0_0_#000]">
            The guiding principles of the Common Sense movement. Read them. Understand them. Apply them.
          </p>
        </div>

        <div className="space-y-8">
          {doctrines.map((doc, idx) => (
            <div key={idx} className="bg-white border-4 border-black p-6 md:p-8 shadow-[12px_12px_0_0_#000] flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-[var(--ministry-red)] text-white text-4xl md:text-5xl font-black p-4 w-20 h-20 flex items-center justify-center shrink-0 border-4 border-black shadow-[4px_4px_0_0_var(--gold)]">
                {doc.num}
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-widest mb-4">
                  {doc.title}
                </h2>
                <p className="font-mono text-lg text-gray-600">
                  {doc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-20 pt-12 border-t-4 border-black">
          <Link href="/about" className="bg-[var(--gold)] text-black font-black uppercase tracking-widest text-lg px-8 py-4 border-4 border-black shadow-[8px_8px_0_0_#000] hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] transition-all">
            Why This Movement Exists
          </Link>
        </div>

      </main>
    </div>
  );
}
