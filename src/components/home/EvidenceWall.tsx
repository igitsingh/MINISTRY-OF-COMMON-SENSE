import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface Case {
  id: string;
  title: string;
  locationName: string | null;
  city: string | null;
  imageUrl: string;
}

interface EvidenceWallProps {
  cases: Case[];
}

export default function EvidenceWall({ cases }: EvidenceWallProps) {
  // If no cases, mock some for visual effect on empty DBs
  const displayCases = cases.length > 0 ? cases : [
    { id: 'mock1', title: 'Broken Footpath', city: 'Delhi', imageUrl: 'https://images.unsplash.com/photo-1595278455648-fb2bb1e89ce3?q=80&w=800&auto=format&fit=crop', locationName: null },
    { id: 'mock2', title: 'Signal Hidden Behind Tree', city: 'Mumbai', imageUrl: 'https://images.unsplash.com/photo-1582212952409-7a329ef31855?q=80&w=800&auto=format&fit=crop', locationName: null },
    { id: 'mock3', title: 'Illegal Parking', city: 'Bengaluru', imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop', locationName: null },
    { id: 'mock4', title: 'Overflowing Garbage', city: 'Pune', imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop', locationName: null },
  ];

  return (
    <section className="bg-[var(--charcoal)] py-20 border-b-8 border-[var(--gold)]">
      <div className="max-w-[1600px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block bg-[var(--ministry-red)] text-white font-mono font-bold text-xs px-3 py-1 mb-4 uppercase tracking-widest">
              Live Feed
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black uppercase text-white tracking-tighter">
              The Evidence Wall
            </h2>
          </div>
          <Link href="/map" className="text-[var(--gold)] font-mono font-bold uppercase tracking-widest text-sm hover:text-white transition-colors mt-4 md:mt-0">
            View All Reports →
          </Link>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {displayCases.map((c) => (
            <div key={c.id} className="break-inside-avoid bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_var(--gold)] group hover:-translate-y-1 transition-transform">
              <div className="relative w-full aspect-square md:aspect-auto md:h-64 mb-4 border-2 border-black overflow-hidden bg-gray-100">
                <Image 
                  src={c.imageUrl} 
                  alt={c.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-mono text-xs font-bold uppercase tracking-widest mb-2">
                <MapPin size={14} className="text-[var(--ministry-red)]" />
                {c.city || c.locationName || 'Unknown Location'}
              </div>
              <h3 className="font-black text-xl leading-tight mb-4">{c.title}</h3>
              <Link 
                href={`/case/${c.id}`} 
                className="block w-full text-center bg-black text-white font-mono text-xs font-bold uppercase tracking-widest py-3 border-2 border-black hover:bg-[var(--gold)] hover:text-black transition-colors"
              >
                View Evidence
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
