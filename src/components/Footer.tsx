import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ShieldAlert } from 'lucide-react';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--ministry-red)] text-[var(--ivory)] border-t-8 border-[var(--gold)] pt-16 pb-8 px-6 md:px-12 mt-auto">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12 border-b-2 border-white/10 pb-12 mb-8">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-4 group inline-flex">
            <Image src="/new-official-logo.png" alt="Ministry Seal" width={60} height={60} className="rounded-full shadow-lg bg-white p-1 shrink-0 group-hover:scale-105 transition-transform" />
            <h3 className="text-xl md:text-2xl font-serif font-black uppercase tracking-widest text-[var(--ivory)] leading-tight max-w-[200px]">Ministry of Common Sense</h3>
          </Link>
          <p className="font-mono text-sm text-white/70 max-w-xs leading-relaxed mt-2">
            Documenting the extraordinary lack of common sense in urban planning, infrastructure, and daily civic life since 2026.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-black uppercase tracking-widest text-sm border-b-2 border-white/10 pb-2 inline-block">Official Directives</h4>
          <ul className="space-y-3 font-mono text-sm">
            <li><Link href="/about" className="hover:text-[var(--gold)] transition-colors">The Manifesto</Link></li>
            <li><Link href="/archive" className="hover:text-[var(--gold)] transition-colors">Case Archive</Link></li>
            <li><Link href="/heroes" className="hover:text-[var(--gold)] transition-colors">Hall of Heroes</Link></li>
            <li><Link href="/join" className="hover:text-[var(--gold)] transition-colors">Become a Field Agent</Link></li>
            <li><Link href="/submit" className="hover:text-white transition-colors text-[var(--gold)] font-bold">Submit Evidence</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-4">
          <h4 className="font-black uppercase tracking-widest text-sm border-b-2 border-white/10 pb-2 inline-block">Secure Comms</h4>
          <div className="space-y-4 font-mono text-sm">
            <a 
              href="https://instagram.com/mini.of.commonsense" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors"
            >
              <InstagramIcon size={20} className="text-[var(--gold)]" />
              @mini.of.commonsense
            </a>
            <a 
              href="mailto:official.ministryofcommonsense@gmail.com" 
              className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors break-all"
            >
              <Mail size={20} className="text-[var(--gold)] shrink-0" />
              official.ministryofcommonsense@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/50">
        <p>&copy; {new Date().getFullYear()} Ministry of Common Sense. All Rights Reserved.</p>
        <p className="text-center md:text-right max-w-lg">
          DISCLAIMER: We are a satirical civic movement. We have no legal authority, but we have an abundance of common sense, which is arguably rarer.
        </p>
      </div>
    </footer>
  );
}
