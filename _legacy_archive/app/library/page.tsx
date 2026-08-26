import Header from '@/components/Header';
import { BookOpen, AlertTriangle, Wind, Search, LayoutTemplate, Globe, ArrowRight, Activity, HandMetal, Eye, ShieldAlert, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import DetectiveTest from '@/components/DetectiveTest';

export default async function CivicTrainingAcademy() {
  // Fetch real stats to prove movement legitimacy
  const totalReports = await prisma.case.count();
  const resolvedReports = await prisma.case.count({ where: { status: 'RESOLVED' } });
  const activeAgents = await prisma.agent.count({ where: { status: 'ACTIVE FIELD AGENT' } });
  
  // Hardcoded for now until we have a City model
  const activeCities = 3;

  return (
    <div className="min-h-screen bg-[#e6e1d6] text-[var(--charcoal)] font-sans">
      <Header />

      <main className="w-full">
        
        {/* SECTION 1: WHY THIS EXISTS (Hero) - REDESIGNED FULL WIDTH */}
        <section className="w-full bg-[var(--charcoal)] text-[var(--ivory)] border-b-8 border-[var(--gold)] relative overflow-hidden mb-20">
          
          {/* Background grid pattern for military/academy feel */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-[1600px] mx-auto px-4 md:px-12 py-16 md:py-24 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-3 bg-[var(--gold)] text-black px-6 py-2 font-black uppercase tracking-widest text-sm mb-8 border-2 border-transparent">
                <BookOpen size={18} />
                Classified: The Science of Common Sense
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[140px] font-serif font-black uppercase tracking-tighter text-white leading-[0.8] mb-8">
                CIVIC<br/>
                <span className="text-[var(--ministry-red)]">TRAINING</span><br/>
                ACADEMY
              </h1>
            </div>

            <div className="flex-1 w-full max-w-2xl">
              <div className="bg-white text-black border-4 border-[var(--gold)] p-8 md:p-12 shadow-[16px_16px_0_0_var(--ministry-red)] relative">
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 border-black -translate-x-2 -translate-y-2"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-8 border-r-8 border-black translate-x-2 -translate-y-2"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-8 border-l-8 border-black -translate-x-2 translate-y-2"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 border-black translate-x-2 translate-y-2"></div>

                <h2 className="text-3xl font-black uppercase tracking-widest mb-6 border-b-4 border-black pb-4 text-[var(--ministry-red)]">
                  Why This Academy Exists
                </h2>
                <div className="font-mono text-xl space-y-6 font-bold text-gray-800 leading-relaxed">
                  <p>Most urban problems are <span className="bg-yellow-200 px-1">not caused by lack of money.</span></p>
                  <p>They are caused by thousands of small failures that everyone learns to ignore.</p>
                  <p className="text-white bg-black p-4 text-center text-2xl">
                    This academy teaches citizens how to see those failures before they become normal.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: CIVIC DETECTIVE TEST */}
        <section className="px-4 max-w-6xl mx-auto">
          <DetectiveTest />
        </section>

        {/* SECTION 2: THE 7 DOCTRINES (Curriculum) */}
        <section className="mb-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-center mb-12 flex items-center justify-center gap-4">
            <span className="w-12 h-2 bg-black hidden md:block"></span>
            The 7 Doctrines of Common Sense
            <span className="w-12 h-2 bg-black hidden md:block"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", title: "Broken Windows", desc: "Why small neglect leads to total area deterioration.", icon: AlertTriangle, color: "var(--ministry-red)" },
              { id: "02", title: "Tragedy of Commons", desc: "Why public property becomes nobody's responsibility.", icon: LayoutTemplate, color: "#2563eb" },
              { id: "03", title: "No Horn Culture", desc: "The psychological damage of continuous noise.", icon: Wind, color: "#d97706" },
              { id: "04", title: "Walkability", desc: "If you can't walk, you must drive. Traffic explained.", icon: HandMetal, color: "#16a34a" },
              { id: "05", title: "Visibility Matters", desc: "People follow systems they can actually see.", icon: Eye, color: "#9333ea" },
              { id: "06", title: "Maintenance Culture", desc: "Building is easy. Maintaining is the actual work.", icon: Activity, color: "#475569" },
              { id: "07", title: "Citizen Ownership", desc: "No government can fix a city that citizens destroy.", icon: ShieldAlert, color: "#000000" },
            ].map(doc => (
              <a href={`#doctrine-${doc.id}`} key={doc.id} className="bg-white border-4 border-black p-6 group hover:bg-[var(--gold)] transition-colors shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_0_#000]">
                <div className="flex justify-between items-start mb-4">
                  <div className="font-black text-2xl text-gray-300 group-hover:text-black">[{doc.id}]</div>
                  <doc.icon size={32} color={doc.color} />
                </div>
                <h3 className="font-black text-xl uppercase tracking-widest mb-2 leading-tight">{doc.title}</h3>
                <p className="font-mono text-sm text-gray-700 font-bold mb-4">{doc.desc}</p>
                <div className="font-black uppercase text-xs tracking-widest flex items-center gap-1">
                  Read Manual <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SECTION 4: THE COMMON SENSE FIELD GUIDE (Expanded Doctrines) */}
        <div className="mb-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-center mb-12 bg-black text-white py-6 border-4 border-white shadow-[12px_12px_0_0_#000]">
            The Field Guide
          </h2>

          {/* DOCTRINE 01: BROKEN WINDOWS */}
          <section id="doctrine-01" className="mb-16 bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_var(--ministry-red)] relative">
            <div className="absolute -top-6 -left-6 bg-[var(--ministry-red)] text-white w-12 h-12 flex items-center justify-center font-black text-2xl border-4 border-black shadow-[4px_4px_0_0_#000] rotate-[-10deg]">01</div>
            
            <h3 className="text-4xl font-black uppercase tracking-widest mb-8 text-[var(--ministry-red)]">Broken Windows Theory</h3>

            <div className="mb-12 border-4 border-black p-8 bg-gray-100 text-center font-black uppercase tracking-widest text-lg md:text-2xl flex flex-col items-center">
              <h4 className="text-xl text-[var(--ministry-red)] mb-6 border-b-2 border-[var(--ministry-red)] pb-2">A Broken Window Is Never Just A Broken Window</h4>
              
              <div className="bg-white px-6 py-3 border-2 border-black w-full max-w-sm">Broken Window</div>
              <div className="text-[var(--ministry-red)] my-2">↓</div>
              <div className="bg-white px-6 py-3 border-2 border-black w-full max-w-sm">Neglect Signal</div>
              <div className="text-[var(--ministry-red)] my-2">↓</div>
              <div className="bg-white px-6 py-3 border-2 border-black w-full max-w-sm">More Neglect</div>
              <div className="text-[var(--ministry-red)] my-2">↓</div>
              <div className="bg-white px-6 py-3 border-2 border-black w-full max-w-sm">Area Deterioration</div>
              <div className="text-[var(--ministry-red)] my-2">↓</div>
              <div className="bg-black text-white px-6 py-3 border-2 border-black w-full max-w-sm">Crime & Disorder</div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 font-mono font-bold text-sm mb-8">
              <div className="bg-gray-100 p-4 border border-black"><span className="block text-[var(--ministry-red)] mb-2 uppercase">Problem</span>Overflowing public dustbin.</div>
              <div className="bg-gray-100 p-4 border border-black"><span className="block text-[var(--ministry-red)] mb-2 uppercase">Why It Happens</span>Nobody clears it on time; people are lazy.</div>
              <div className="bg-gray-100 p-4 border border-black"><span className="block text-[var(--ministry-red)] mb-2 uppercase">What It Causes</span>A new "normal" where throwing garbage on the road is acceptable.</div>
              <div className="bg-gray-100 p-4 border border-black"><span className="block text-green-700 mb-2 uppercase">What Citizens Can Do</span>Report immediately before the pile grows. Fix it fast.</div>
            </div>

            {/* SECTION 7: LINK TO FORUM */}
            <div className="bg-[#f4ebd0] p-6 border-2 border-[#d4c5a9] flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="font-black uppercase tracking-widest text-lg">Discuss This Doctrine</h4>
                <p className="font-mono text-sm">Join the forum to discuss real examples of Broken Windows in your city.</p>
              </div>
              <Link href="/forum" className="bg-black text-white font-black uppercase px-6 py-3 border-2 border-black hover:bg-gray-800 transition-colors shrink-0 flex items-center gap-2">
                <MessageSquare size={18} /> Enter Forum
              </Link>
            </div>
          </section>

          {/* (Other doctrines would follow the same format, truncated for brevity) */}
        </div>

        {/* SECTION 6: COMMON SENSE IN THE WILD (Full Width) */}
        <section className="mb-20 bg-black text-white border-y-8 border-[var(--gold)] w-full py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[var(--gold)] mb-4">Common Sense In The Wild</h2>
            <p className="font-mono text-lg opacity-80 mb-12">The theory is useless without execution. Here is the live status of the movement.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-black uppercase tracking-widest">
              <div>
                <div className="text-5xl md:text-7xl mb-2 text-white">{totalReports.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Reports Submitted</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl mb-2 text-green-400">{resolvedReports.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Resolved</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl mb-2 text-[var(--gold)]">{activeAgents.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Active Agents</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl mb-2 text-blue-400">{activeCities}</div>
                <div className="text-gray-400 text-sm">Cities</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FINAL CTA (GRADUATION) (Full Width) */}
        <section className="w-full bg-[var(--ministry-red)] text-white border-y-8 border-black p-8 md:p-16 text-center shadow-none relative overflow-hidden">
          {/* Subtle background seal */}
          <ShieldAlert size={400} className="absolute -top-20 -right-20 text-black opacity-10 pointer-events-none" />

          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 relative z-10">
              YOU HAVE COMPLETED BASIC CIVIC TRAINING
            </h2>
            
            <div className="bg-black/20 p-6 md:p-8 inline-block text-left font-mono font-bold text-lg md:text-xl mb-12 border-2 border-black relative z-10">
              <h3 className="text-yellow-400 uppercase tracking-widest mb-4 font-black">You now know:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">✓ Why cities deteriorate</li>
                <li className="flex items-center gap-3">✓ Why people copy neglect</li>
                <li className="flex items-center gap-3">✓ Why public spaces fail</li>
                <li className="flex items-center gap-3">✓ Why maintenance matters</li>
                <li className="flex items-center gap-3">✓ How better systems are built</li>
              </ul>
            </div>

            <h3 className="text-2xl font-black uppercase tracking-widest mb-8 relative z-10">Ready to put it into practice?</h3>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
              <Link href="/submit" className="bg-[var(--gold)] text-black font-black uppercase tracking-widest text-xl px-8 py-4 border-4 border-black hover:bg-yellow-300 transition-colors shadow-[6px_6px_0_0_#000] hover:translate-y-1 hover:shadow-none">
                REPORT AN ISSUE
              </Link>
              <Link href="/join" className="bg-black text-white font-black uppercase tracking-widest text-xl px-8 py-4 border-4 border-black hover:bg-gray-800 transition-colors shadow-[6px_6px_0_0_#000] hover:translate-y-1 hover:shadow-none">
                BECOME AN AGENT
              </Link>
              <Link href="/map" className="bg-white text-black font-black uppercase tracking-widest text-xl px-8 py-4 border-4 border-black hover:bg-gray-100 transition-colors shadow-[6px_6px_0_0_#000] hover:translate-y-1 hover:shadow-none">
                EXPLORE THE MAP
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
