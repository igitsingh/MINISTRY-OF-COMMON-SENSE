"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileSearch, Menu, X, FileText } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[var(--ministry-red)] text-[var(--ivory)] py-2 md:py-3 px-4 md:px-10 border-b-[4px] border-[var(--gold)] flex items-center justify-between shadow-md relative z-[100] w-full">
      <div className="w-full flex justify-between items-center max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3 md:gap-5">
          <Link href="/" className="shrink-0 relative z-10 mr-2 md:mr-6">
            <Image 
              src="/new-official-logo.png" 
              alt="Ministry Seal" 
              width={32} 
              height={32} 
              className="rounded-full shadow bg-white p-0.5 md:w-[40px] md:h-[40px] scale-[1.3] md:scale-[1.6] origin-left" 
            />
          </Link>
          <div className="flex-1">
            <h1 className="text-base md:text-lg lg:text-xl font-serif font-black uppercase tracking-widest text-[var(--ivory)] leading-tight">
              MINISTRY OF<br />COMMON SENSE
            </h1>
            <p className="text-[7px] md:text-[8px] font-mono text-[var(--gold)] tracking-wider mt-0.5 uppercase hidden sm:block max-w-[240px] md:max-w-[320px] leading-none">
              Official Department of Things That Shouldn't Need Explaining
            </p>
          </div>
        </div>
        <nav className="hidden xl:flex gap-8 2xl:gap-12 font-mono text-xs tracking-widest font-bold items-center">
          <Link href="/forum" className="hover:text-[var(--gold)] transition-colors">FORUM</Link>
          <Link href="/library" className="hover:text-[var(--gold)] transition-colors">LIBRARY</Link>
          <Link href="/map" className="hover:text-[var(--gold)] transition-colors">MAP</Link>
          <Link href="/agents" className="hover:text-[var(--gold)] transition-colors">AGENTS</Link>
          <Link href="/hall-of-action" className="hover:text-[var(--gold)] transition-colors">HALL OF ACTION</Link>
          <Link href="/submit" className="bg-yellow-400 text-black px-4 py-2 font-black flex items-center gap-2 hover:bg-yellow-300 transition-colors shrink-0 whitespace-nowrap">
            <FileText size={16} />
            SUBMIT EVIDENCE
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden text-[var(--ivory)] hover:text-[var(--gold)] p-2 shrink-0 ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav className="absolute top-[100%] left-0 right-0 bg-[var(--ministry-red)] border-b-[8px] border-[var(--gold)] shadow-2xl flex flex-col items-center xl:hidden pb-6 pt-2 z-[100]">
          <Link 
            href="/forum" 
            className="w-full text-center py-5 border-b border-white/10 uppercase font-black text-lg tracking-widest text-white hover:text-[var(--gold)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Forum
          </Link>
          <Link 
            href="/library" 
            className="w-full text-center py-5 border-b border-white/10 uppercase font-black text-lg tracking-widest text-white hover:text-[var(--gold)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Library
          </Link>
          <Link 
            href="/map" 
            className="w-full text-center py-5 border-b border-white/10 uppercase font-black text-lg tracking-widest text-white hover:text-[var(--gold)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Map
          </Link>
          <Link 
            href="/agents" 
            className="w-full text-center py-5 border-b border-white/10 uppercase font-black text-lg tracking-widest text-white hover:text-[var(--gold)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Agents
          </Link>
          <Link 
            href="/accountability" 
            className="w-full text-center py-5 border-b border-white/10 uppercase font-black text-lg tracking-widest text-white hover:text-[var(--gold)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Accountability
          </Link>
          <div className="w-full p-6 flex justify-center mt-2">
            <Link 
              href="/submit" 
              className="bg-[var(--gold)] text-[var(--charcoal)] px-8 py-4 w-full justify-center rounded shadow-xl hover:bg-yellow-400 transition-colors flex items-center gap-3 text-lg font-black uppercase tracking-widest border-2 border-transparent"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileSearch size={24} />
              Submit Evidence
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}