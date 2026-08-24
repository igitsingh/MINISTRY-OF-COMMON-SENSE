"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileSearch, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[var(--ministry-red)] text-[var(--ivory)] p-4 md:p-6 border-b-[8px] border-[var(--gold)] flex items-center justify-between shadow-2xl relative z-[100] w-full px-4 md:px-12">
      <div className="w-full flex justify-between items-center max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/" className="shrink-0">
            <Image src="/new-official-logo.png" alt="Ministry Seal" width={50} height={50} className="rounded-full shadow-lg bg-white p-1 md:w-[70px] md:h-[70px]" />
          </Link>
          <div className="flex-1">
            <h1 className="text-lg sm:text-2xl md:text-4xl font-serif font-black uppercase tracking-widest text-[var(--ivory)] leading-tight">Ministry of Common Sense</h1>
            <p className="text-[9px] sm:text-xs md:text-sm font-mono text-[var(--gold)] tracking-widest mt-1 uppercase hidden sm:block">Official Department of Things That Shouldn't Need Explaining</p>
          </div>
        </div>
        <nav className="hidden lg:flex space-x-8 uppercase font-bold text-sm tracking-widest items-center whitespace-nowrap">
          <Link href="/archive" className="hover:text-[var(--gold)] transition-colors">Case Archive</Link>
          <Link href="/heroes" className="hover:text-[var(--gold)] transition-colors">Hall of Heroes</Link>
          <Link href="/submit" className="bg-[var(--gold)] text-[var(--charcoal)] px-6 py-3 rounded shadow hover:bg-yellow-400 transition-colors flex items-center gap-2 text-base ml-4">
            <FileSearch size={18} />
            Submit Evidence
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[var(--ivory)] hover:text-[var(--gold)] p-2 shrink-0 ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav className="absolute top-[100%] left-0 right-0 bg-[var(--ministry-red)] border-b-[8px] border-[var(--gold)] shadow-2xl flex flex-col items-center lg:hidden pb-6 pt-2 z-[100]">
          <Link 
            href="/archive" 
            className="w-full text-center py-5 border-b border-white/10 uppercase font-black text-lg tracking-widest text-white hover:text-[var(--gold)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Case Archive
          </Link>
          <Link 
            href="/heroes" 
            className="w-full text-center py-5 border-b border-white/10 uppercase font-black text-lg tracking-widest text-white hover:text-[var(--gold)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hall of Heroes
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