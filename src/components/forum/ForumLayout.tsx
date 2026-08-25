'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Share2, TrendingUp, Users, Eye } from 'lucide-react';
import { Case, Authority } from '@prisma/client';

type CaseWithAuthority = Case & { authority?: Authority | null };
import { supportCase } from '@/app/actions/forum';

const CATEGORIES = [
  "ALL", "ROADS", "WATER", "ELECTRICITY", "POLICE & LAW", 
  "CORRUPTION", "EDUCATION", "HEALTHCARE", "EMPLOYMENT", 
  "ENVIRONMENT", "TRANSPORT", "HOUSING", "WOMEN SAFETY", 
  "MEDIA", "JUDICIARY", "OTHER"
];

// Helper component for the case card to manage its own optimistic state
function CaseCard({ c }: { c: CaseWithAuthority }) {
  const [supporters, setSupporters] = useState(c.supportersCount || 0);
  const [hasSupported, setHasSupported] = useState(false);

  const handleSupport = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (hasSupported) return;
    setSupporters(prev => prev + 1);
    setHasSupported(true);
    await supportCase(c.id);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <Link href={`/forum/${c.id}`} className="block group border-2 border-black bg-[#f4ebd0] p-6 shadow-[6px_6px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-shadow">
      {/* META HEADER */}
      <div className="flex gap-2 mb-4">
        <span className="font-mono text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-black bg-white">
          {c.category}
        </span>
        <span className="font-mono text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-black bg-black text-white">
          {c.status}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-2xl md:text-3xl font-black leading-tight mb-3 group-hover:text-[var(--ministry-red)] transition-colors">
        {c.title}
      </h3>

      {/* DESC */}
      <p className="text-black/70 mb-6 font-medium leading-relaxed">
        {c.description?.slice(0, 150)}{c.description && c.description.length > 150 ? "..." : ""}
      </p>

      {/* ACCOUNTABILITY TAG (Neutral) */}
      {c.authority && (
        <div className="mb-6 bg-white border border-black/20 p-3 flex items-center justify-between text-xs font-mono">
          <div className="flex flex-col">
            <span className="text-black/50 uppercase tracking-widest text-[10px] font-bold">Responsible Authority</span>
            <span className="text-sm font-black text-black">{c.authority.name}</span>
            <span className="opacity-70">{c.authority.designation}</span>
          </div>
        </div>
      )}

      {/* AUTHOR & FOOTER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-black/10">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center font-bold font-mono bg-white text-xs">
            {c.agentName?.substring(0,2).toUpperCase() || 'AN'}
          </div>
          <div>
            <div className="font-bold text-sm leading-none flex items-center gap-2">
              {c.agentName || "Anonymous Citizen"}
              <span className="font-mono text-[10px] bg-black text-white px-1 py-0.5 font-bold border border-black"># DOC / {c.id.substring(c.id.length - 5).toUpperCase()}</span>
            </div>
            <div className="font-mono text-[10px] text-black/50 uppercase flex items-center gap-2 mt-1">
              <span>{formatDate(c.createdAt)}</span>
              <span>•</span>
              <span>{c.locationName || c.city || "India"}</span>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-2 font-mono text-xs font-bold" onClick={e => e.preventDefault()}>
          <button 
            onClick={handleSupport}
            disabled={hasSupported}
            className={`flex items-center gap-2 px-3 py-1.5 border border-black transition-colors ${hasSupported ? "bg-black text-white" : "bg-white hover:bg-black/5"}`}
          >
            <Users size={14} /> {supporters}
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 border border-black hover:bg-black/5 transition-colors bg-white">
            <Eye size={14} /> View Dossier
          </div>
        </div>

      </div>
    </Link>
  );
}

export default function ForumLayout({ initialCases }: { initialCases: CaseWithAuthority[] }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeSort, setActiveSort] = useState<"MOST BACKED" | "RECENT">("MOST BACKED");

  // Top based strictly on supporters
  const topCases = [...initialCases].sort((a, b) => (b.supportersCount || 0) - (a.supportersCount || 0)).slice(0, 5);

  // Filter main feed
  let feedCases = initialCases;
  if (activeCategory !== "ALL") {
    feedCases = feedCases.filter(c => c.category.toUpperCase() === activeCategory);
  }

  // Sort main feed
  if (activeSort === "RECENT") {
    feedCases = feedCases.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else if (activeSort === "MOST BACKED") {
    feedCases = feedCases.sort((a, b) => (b.supportersCount || 0) - (a.supportersCount || 0));
  }

  return (
    <div className="bg-[var(--ivory)] min-h-screen text-[var(--charcoal)] pb-24">
      
      {/* HEADER STRIP */}
      <div className="border-b-2 border-black py-4 px-6 mb-8 mt-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="font-mono text-xs md:text-sm uppercase tracking-widest opacity-60 font-bold mb-2">
              PUBLIC CIVIC ESCALATION DIRECTORY
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter leading-none">
              <span className="text-[var(--charcoal)]">Active</span> <span className="text-[var(--gold)] italic border-b-8 border-[var(--gold)]">Issues.</span>
            </h1>
          </div>
          <Link href="/submit" className="bg-black text-white font-black uppercase tracking-widest text-lg px-8 py-3 border-2 border-black hover:bg-[var(--gold)] hover:text-black transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]">
            + Document Issue
          </Link>
        </div>
      </div>

      {/* 2-COLUMN LAYOUT (Removed 3rd column since hot/top are same now) */}
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* MAIN FEED */}
        <main className="lg:col-span-8 space-y-6">
          
          {/* CATEGORY FILTER PILLS */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs font-bold uppercase tracking-widest px-3 py-1.5 border border-black transition-colors ${
                  activeCategory === cat 
                    ? 'bg-black text-[var(--ivory)] shadow-[2px_2px_0_0_var(--gold)]' 
                    : 'bg-transparent text-black hover:bg-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SORT TOGGLES */}
          <div className="flex gap-2">
            {(["MOST BACKED", "RECENT"] as const).map(sort => (
              <button 
                key={sort}
                onClick={() => setActiveSort(sort)}
                className={`font-mono text-xs font-bold uppercase tracking-widest px-4 py-1 border border-black transition-colors ${
                  activeSort === sort
                    ? 'bg-black text-[var(--ivory)]'
                    : 'bg-[var(--ivory)] text-black hover:bg-black/5'
                }`}
              >
                {sort}
              </button>
            ))}
          </div>

          {/* FEED */}
          <div className="space-y-6">
            {feedCases.map(c => (
              <CaseCard key={c.id} c={c} />
            ))}
            
            {feedCases.length === 0 && (
              <div className="border-2 border-black bg-white p-12 text-center shadow-[6px_6px_0_0_#000]">
                <h3 className="text-2xl font-black uppercase mb-2">No Reports Found</h3>
                <p className="font-mono opacity-70">No evidence matching these filters.</p>
              </div>
            )}
          </div>
        </main>

        {/* RIGHT COLUMN (TOP SIDEBAR) */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="border-2 border-black bg-white shadow-[6px_6px_0_0_#000]">
            <div className="border-b-2 border-black px-4 py-3 flex items-center justify-between bg-black text-white">
              <div className="font-black flex items-center gap-2 uppercase tracking-widest text-sm">
                <TrendingUp size={16} /> HIGHEST PRIORITY
              </div>
              <div className="font-mono text-[10px] tracking-widest opacity-60 text-white">NEEDS RESOLUTION</div>
            </div>
            
            <div className="flex flex-col">
              {topCases.map((c, index) => (
                <Link href={`/forum/${c.id}`} key={c.id} className="p-4 border-b border-black/10 last:border-0 hover:bg-black/5 transition-colors flex gap-4">
                  <div className="text-3xl font-black text-black/20">{index + 1}</div>
                  <div>
                    <h4 className="font-bold text-sm leading-tight mb-2 group-hover:underline">{c.title}</h4>
                    <div className="flex items-center gap-3 font-mono text-[10px] text-black/60 uppercase">
                      <span>{c.category}</span>
                      <span className="flex items-center gap-1 font-bold text-black"><Users size={10} /> {c.supportersCount} Supporters</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
