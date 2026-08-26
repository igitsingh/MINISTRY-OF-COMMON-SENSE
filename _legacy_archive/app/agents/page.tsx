import Header from '@/components/Header';
import { ShieldAlert, UserCheck, MapPin, Award } from 'lucide-react';
import prisma from '@/lib/prisma';

export default async function AgentsPage() {
  const agents = await prisma.agent.findMany({
    orderBy: { casesResolved: 'desc' },
  });

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans">
      <Header />

      <div className="bg-red-700 text-white font-mono text-sm py-2 overflow-hidden border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-yellow-300">
            <ShieldAlert size={16} />
            RESTRICTED ACCESS: MINISTRY OPERATIVES ONLY
            <ShieldAlert size={16} />
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-6 mt-8">
        <div className="mb-12 border-b-4 border-black pb-8">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 flex items-center gap-4 text-[var(--ministry-red)]">
            Field Agents of the Ministry
          </h1>
          <p className="text-xl font-mono opacity-80 max-w-3xl">
            The Ministry has no official offices. Only citizens who refuse to ignore problems. 
            Below is the authorized roster of active field operatives documenting the nation's infrastructural reality.
          </p>
        </div>

        {agents.length === 0 ? (
          <div className="bg-yellow-100 border-4 border-yellow-500 p-8 text-center shadow-[8px_8px_0_0_#000]">
            <h2 className="text-2xl font-black uppercase mb-2">No Active Agents Found</h2>
            <p className="font-mono">The field is currently empty. The Ministry awaits its first volunteers.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map(agent => (
              <div key={agent.id} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] transition-all relative">
                {/* Stamp */}
                {agent.casesResolved > 10 && (
                  <div className="absolute top-4 right-4 border-4 border-green-600 text-green-600 font-black uppercase text-xs p-1 transform rotate-12 opacity-80">
                    VETERAN
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-6 border-b-2 border-dashed border-gray-300 pb-4">
                  <div className="w-16 h-16 bg-gray-200 border-2 border-black flex items-center justify-center">
                    <UserCheck size={32} className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl uppercase tracking-tight">{agent.name}</h3>
                    <div className="flex items-center gap-1 font-mono text-sm text-gray-600">
                      <MapPin size={14} />
                      {agent.area}, {agent.city}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 font-mono text-sm mb-6">
                  <div className="bg-gray-100 p-2 border border-gray-300">
                    <div className="text-xs text-gray-500 mb-1">INVESTIGATIONS</div>
                    <div className="text-xl font-bold">{agent.casesReported}</div>
                  </div>
                  <div className="bg-gray-100 p-2 border border-gray-300">
                    <div className="text-xs text-gray-500 mb-1">RESOLVED</div>
                    <div className="text-xl font-bold text-green-700">{agent.casesResolved}</div>
                  </div>
                </div>

                <div className="bg-red-50 p-2 border border-red-200 font-mono text-xs flex justify-between items-center">
                  <span className="text-gray-600">STATUS:</span>
                  <span className="font-bold text-red-700 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                    {agent.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
