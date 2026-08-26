import prisma from '@/lib/prisma';
import Header from '@/components/Header';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function CasePage({ params }: { params: { id: string } }) {
  const caseData = await prisma.case.findUnique({
    where: { id: params.id },
    include: { official: true }
  });

  if (!caseData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans">
      <Header />
      
      <main className="max-w-6xl mx-auto p-6 mt-8">
        
        {/* CASE HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b-4 border-black pb-8">
          <div>
            <div className="font-mono text-sm text-[var(--ministry-red)] font-bold mb-2">CASE #{caseData.id.slice(-8).toUpperCase()}</div>
            <h1 className="text-4xl md:text-5xl font-serif font-black uppercase text-black mb-2 leading-none">{caseData.title}</h1>
            <div className="font-mono text-sm bg-gray-200 inline-block px-3 py-1 font-bold">
              {caseData.locationName || `${caseData.locationLat}, ${caseData.locationLng}`}
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <div className="bg-[var(--ministry-red)] text-white text-center p-3 border-4 border-[var(--gold)] min-w-[120px]">
              <div className="text-xs font-mono mb-1">STATUS</div>
              <div className="font-black tracking-widest">{caseData.status}</div>
            </div>
            <div className="bg-white text-black text-center p-3 border-4 border-black min-w-[100px]">
              <div className="text-xs font-mono mb-1">CATEGORY</div>
              <div className="font-black tracking-widest uppercase">{caseData.category}</div>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mb-12 font-mono text-xs overflow-x-auto">
          <div className="flex justify-between items-center min-w-[600px] border-t-2 border-black pt-4 relative">
            {['OPEN', 'UNDER_REVIEW', 'AUTHORITY_INFORMED', 'WORK_STARTED', 'RESOLVED'].map((status, idx) => {
              const isActive = caseData.status === status;
              const isPast = ['OPEN', 'UNDER_REVIEW', 'AUTHORITY_INFORMED', 'WORK_STARTED', 'RESOLVED'].indexOf(caseData.status) > idx;
              
              return (
                <div key={status} className={`flex flex-col items-center ${isActive || isPast ? 'text-black font-bold' : 'text-gray-400'}`}>
                  <div className={`w-4 h-4 rounded-full mb-2 border-2 border-black ${isActive ? 'bg-[var(--gold)] animate-pulse' : isPast ? 'bg-black' : 'bg-white'}`}></div>
                  <div className="uppercase tracking-widest">{status.replace('_', ' ')}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: EVIDENCE & REPORTS */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
              <h3 className="font-black text-2xl uppercase tracking-widest text-[var(--ministry-red)] mb-4 border-b-2 border-black pb-2">Visual Evidence</h3>
              <div className="relative w-full aspect-video border-2 border-black bg-gray-100">
                 {caseData.imageUrl ? (
                   <Image src={caseData.imageUrl} alt="Case Evidence" fill className="object-cover" />
                 ) : (
                   <div className="flex items-center justify-center w-full h-full font-mono text-gray-400">NO VISUAL EVIDENCE</div>
                 )}
              </div>
              {caseData.description && (
                <div className="mt-6 bg-[#f4ebd0] p-4 border border-[#d4c5a9] font-mono whitespace-pre-wrap">
                  <div className="text-xs text-gray-500 mb-2 font-bold uppercase">Incident Description</div>
                  {caseData.description}
                </div>
              )}
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
              <h3 className="font-black text-2xl uppercase tracking-widest text-[var(--ministry-red)] mb-4 border-b-2 border-black pb-2">Central Bureau Report</h3>
              <div className="font-mono bg-[#f4ebd0] p-4 border border-[#d4c5a9]">
                {caseData.satiricalReport}
              </div>
              
              <h3 className="font-black uppercase tracking-widest text-[var(--ministry-red)] mt-8 mb-4 border-b-2 border-black pb-2">Recommended Fix</h3>
              <div className="font-mono bg-[#f4ebd0] p-4 border border-[#d4c5a9]">
                {caseData.suggestedFix}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: VOTING & ACTIONS */}
          <div className="space-y-6">
             <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
               <h3 className="font-black uppercase tracking-widest mb-4">Community Action</h3>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="bg-gray-100 border-2 border-black p-4 text-center cursor-pointer hover:bg-yellow-100 transition-colors">
                   <div className="text-3xl font-black mb-1 text-[var(--ministry-red)]">{caseData.upvotes}</div>
                   <div className="font-mono text-xs font-bold uppercase">Upvotes</div>
                 </div>
                 <div className="bg-gray-100 border-2 border-black p-4 text-center cursor-pointer hover:bg-yellow-100 transition-colors">
                   <div className="text-3xl font-black mb-1">{caseData.witnesses}</div>
                   <div className="font-mono text-xs font-bold uppercase">Witnesses</div>
                 </div>
               </div>

               <div className="space-y-3 font-mono font-bold text-sm">
                 <button className="w-full bg-[var(--gold)] text-black border-2 border-black py-3 hover:bg-yellow-300 transition-colors shadow-[2px_2px_0_0_#000] active:translate-y-1 active:shadow-none">
                   ▲ UPVOTE CASE
                 </button>
                 <button className="w-full bg-black text-white border-2 border-black py-3 hover:bg-gray-800 transition-colors shadow-[2px_2px_0_0_#000] active:translate-y-1 active:shadow-none">
                   👁 I WITNESSED THIS
                 </button>
                 <button className="w-full bg-white text-black border-2 border-black py-3 hover:bg-gray-100 transition-colors shadow-[2px_2px_0_0_#000] active:translate-y-1 active:shadow-none">
                   📷 I HAVE EVIDENCE
                 </button>
               </div>
             </div>

             <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
               <h3 className="font-black uppercase tracking-widest mb-4">Accountability</h3>
               
               {caseData.official ? (
                 <div className="font-mono text-sm border-2 border-[var(--ministry-red)] p-4 bg-red-50">
                   <div className="text-[var(--ministry-red)] font-black uppercase mb-2 border-b-2 border-red-200 pb-1">Primary Official</div>
                   <div className="space-y-3">
                     <div>
                       <div className="text-gray-500 text-[10px] uppercase">Name</div>
                       <div className="font-bold text-lg">{caseData.official.name}</div>
                     </div>
                     <div className="grid grid-cols-2 gap-2">
                       <div>
                         <div className="text-gray-500 text-[10px] uppercase">Role</div>
                         <div className="font-bold">{caseData.official.designation}</div>
                       </div>
                       <div>
                         <div className="text-gray-500 text-[10px] uppercase">Party</div>
                         <div className="font-bold">{caseData.official.party}</div>
                       </div>
                     </div>
                     <div>
                       <div className="text-gray-500 text-[10px] uppercase">Jurisdiction</div>
                       <div className="font-bold">{caseData.official.constituency}</div>
                     </div>
                     
                     {/* MyNeta Integration Highlight */}
                     <div className="bg-white p-3 border-2 border-black mt-4">
                       <div className="text-[10px] font-black uppercase tracking-widest bg-yellow-300 inline-block px-1 mb-1">MyNeta Data</div>
                       <div className="flex justify-between items-center text-xs">
                         <span>Declared Assets:</span>
                         <span className="font-bold">{caseData.official.assets || 'N/A'}</span>
                       </div>
                       <div className="flex justify-between items-center text-xs mt-1">
                         <span>Criminal Cases:</span>
                         <span className={`font-bold ${caseData.official.criminalRecords > 0 ? 'text-[var(--ministry-red)]' : 'text-green-600'}`}>{caseData.official.criminalRecords}</span>
                       </div>
                       {caseData.official.myNetaUrl && (
                         <a href={caseData.official.myNetaUrl} target="_blank" rel="noopener noreferrer" className="block text-center bg-black text-white py-2 mt-3 font-bold hover:bg-gray-800 transition-colors uppercase text-[10px] tracking-widest">
                           View Full Profile
                         </a>
                       )}
                     </div>
                   </div>
                 </div>
               ) : (
                 <div className="font-mono text-xs bg-gray-100 p-4 border border-dashed border-gray-400 text-center text-gray-500">
                   Responsible official not yet identified.
                 </div>
               )}
             </div>

             <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
               <h3 className="font-black uppercase tracking-widest mb-4">Authority Tracking</h3>
               <div className="font-mono text-sm space-y-4">
                 <div>
                   <div className="text-gray-500 text-xs">RESPONSIBLE AUTHORITY</div>
                   <div className="font-bold border-b border-dashed border-gray-300 pb-1">Nagar Nigam</div>
                 </div>
                 <div>
                   <div className="text-gray-500 text-xs">VIOLATION LEVEL</div>
                   <div className="font-bold border-b border-dashed border-gray-300 pb-1">{caseData.violationLevel || "TBD"}</div>
                 </div>
                 <div>
                   <div className="text-gray-500 text-xs">FILED BY</div>
                   <div className="font-bold">{caseData.agentName || "Anonymous Citizen"}</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
