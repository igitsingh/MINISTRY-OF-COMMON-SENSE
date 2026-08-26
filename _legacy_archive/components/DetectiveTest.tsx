"use client";

import { useState } from 'react';
import { Crosshair, CheckCircle2 } from 'lucide-react';

export default function DetectiveTest() {
  const [found, setFound] = useState<string[]>([]);
  
  const violations = [
    { id: 'signal', top: '10%', left: '75%', label: 'Hidden Traffic Signal' },
    { id: 'garbage', top: '80%', left: '20%', label: 'Garbage Spill' },
    { id: 'marking', top: '60%', left: '50%', label: 'Missing Lane Marking' },
    { id: 'footpath', top: '70%', left: '85%', label: 'Encroached Footpath' },
  ];

  const handleSpot = (id: string) => {
    if (!found.includes(id)) setFound([...found, id]);
  };

  return (
    <div className="bg-white border-4 border-black p-6 md:p-12 shadow-[12px_12px_0_0_#000] mb-20 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 bg-red-600 text-white font-black uppercase px-6 py-2 border-b-4 border-l-4 border-black">
        PRACTICAL EXAM
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Crosshair size={48} className="text-black" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[var(--ministry-red)] leading-none">
          Civic Detective Test
        </h2>
      </div>

      <p className="text-xl font-mono mb-8 font-bold text-gray-700">
        MISSION: Find all 4 common sense violations in this typical urban scene. Tap to identify.
      </p>

      <div className="relative w-full aspect-video bg-gray-300 border-4 border-black mb-8 overflow-hidden cursor-crosshair group">
        
        {/* Placeholder for the "Street Scene" */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
           <span className="font-mono text-2xl text-black/20 font-black rotate-[-15deg]">SIMULATED ENVIRONMENT</span>
        </div>

        {/* Violations Hotspots */}
        {violations.map((v) => {
          const isFound = found.includes(v.id);
          return (
            <div 
              key={v.id}
              onClick={() => handleSpot(v.id)}
              className={`absolute w-16 h-16 -ml-8 -mt-8 rounded-full border-4 flex items-center justify-center transition-all ${isFound ? 'border-green-500 bg-green-500/20' : 'border-transparent hover:border-red-500 border-dashed'}`}
              style={{ top: v.top, left: v.left }}
            >
              {isFound && <CheckCircle2 size={32} className="text-green-600 animate-bounce" />}
            </div>
          );
        })}
      </div>

      <div className="bg-gray-100 p-6 border-2 border-dashed border-gray-400">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-black uppercase tracking-widest text-lg">Investigation Status</h3>
          <div className="font-mono font-bold bg-black text-white px-3 py-1">{found.length} / {violations.length} FOUND</div>
        </div>
        
        <ul className="grid sm:grid-cols-2 gap-4 font-mono font-bold">
          {violations.map((v) => (
            <li key={v.id} className={`flex items-center gap-3 p-3 border-2 border-black ${found.includes(v.id) ? 'bg-green-100' : 'bg-white opacity-50'}`}>
              <div className={`w-6 h-6 shrink-0 border-2 border-black flex items-center justify-center ${found.includes(v.id) ? 'bg-green-500' : 'bg-gray-200'}`}>
                {found.includes(v.id) && <CheckCircle2 size={16} className="text-white" />}
              </div>
              {found.includes(v.id) ? v.label : '???'}
            </li>
          ))}
        </ul>

        {found.length === violations.length && (
          <div className="mt-8 bg-green-600 text-white p-4 font-black uppercase tracking-widest text-center border-4 border-black animate-pulse">
            TRAINING COMPLETE. YOU ARE NOW TRAINED TO SEE THE INVISIBLE.
          </div>
        )}
      </div>
    </div>
  );
}
