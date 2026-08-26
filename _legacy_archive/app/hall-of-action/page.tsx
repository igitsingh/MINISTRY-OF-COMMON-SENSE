import Header from '@/components/Header';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import prisma from '@/lib/prisma';
import Image from 'next/image';

export default async function HallOfActionPage() {
  const completedFunds = await prisma.actionFund.findMany({
    where: { status: 'COMPLETED' },
    orderBy: { id: 'desc' }
  });

  const resolvedCases = await prisma.case.findMany({
    where: { status: 'RESOLVED' },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans">
      <Header />

      <div className="bg-green-700 text-white font-mono text-sm py-2 overflow-hidden border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-green-200">
            <ShieldAlert size={16} />
            EVIDENCE OF RESTORATION
            <ShieldAlert size={16} />
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-6 mt-8">
        <div className="mb-12 border-b-4 border-black pb-8">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 text-[var(--charcoal)] flex items-center gap-4">
            Hall of Action
            <CheckCircle2 size={40} className="text-green-600" />
          </h1>
          <p className="text-xl font-mono opacity-80 max-w-3xl">
            Real impact. Documented changes. This archive contains the official record of infrastructural repairs forced by citizen intelligence or funded by the Ministry Action Fund.
          </p>
        </div>

        {resolvedCases.length === 0 && completedFunds.length === 0 ? (
           <div className="bg-yellow-100 border-4 border-yellow-500 p-8 text-center shadow-[8px_8px_0_0_#000]">
             <h2 className="text-2xl font-black uppercase mb-2">Awaiting First Victory</h2>
             <p className="font-mono">No cases have been fully restored yet. Check back soon.</p>
           </div>
        ) : (
          <div className="space-y-12">
            {resolvedCases.map(c => (
              <div key={c.id} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
                <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-dashed border-gray-300">
                  <div>
                    <h2 className="text-2xl font-black uppercase">{c.title}</h2>
                    <p className="font-mono text-sm">Case #{c.id.slice(-6).toUpperCase()} | {c.locationName || c.city}</p>
                  </div>
                  <div className="bg-green-100 text-green-800 font-black px-4 py-2 border-2 border-green-600 transform rotate-2">
                    RESTORED
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-mono font-bold mb-2 text-red-700">BEFORE (THE FAILURE)</h3>
                    <div className="relative w-full h-48 bg-gray-200 border-2 border-black overflow-hidden group">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src={c.imageUrl} alt="Before" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mono font-bold mb-2 text-green-700">AFTER (COMMON SENSE)</h3>
                    <div className="relative w-full h-48 bg-gray-200 border-2 border-black overflow-hidden group flex items-center justify-center">
                       {c.afterImageUrl ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                         <img src={c.afterImageUrl} alt="After" className="object-cover w-full h-full" />
                       ) : (
                         <div className="font-mono text-gray-500">AWAITING FINAL PHOTO</div>
                       )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
