'use client';

import React, { useState } from 'react';
import { Mail, Share2, Users, Bell } from 'lucide-react';
import { logEmailSent, supportCase } from '@/app/actions/forum';

interface ActionProps {
  caseId: string;
  emailUrl: string;
  initialSupporters: number;
}

export default function ClientActions({ caseId, emailUrl, initialSupporters }: ActionProps) {
  const [supporters, setSupporters] = useState(initialSupporters);
  const [hasSupported, setHasSupported] = useState(false);

  const handleSendEmail = () => {
    // Fire off log in the background
    logEmailSent(caseId).catch(console.error);
    // Open mailto link
    window.location.href = emailUrl;
  };

  const handleSupport = async () => {
    if (hasSupported) return;
    setSupporters(prev => prev + 1);
    setHasSupported(true);
    await supportCase(caseId);
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <button 
        onClick={handleSendEmail}
        className="w-full bg-black text-white font-black uppercase tracking-widest py-4 border-2 border-black flex items-center justify-center gap-3 hover:bg-[var(--gold)] hover:text-black transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]"
      >
        <Mail size={20} /> SEND OFFICIAL REQUEST
      </button>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white text-black font-black uppercase tracking-widest py-3 border-2 border-black flex items-center justify-center gap-2 hover:bg-black/5 transition-colors">
          <Share2 size={16} /> SHARE ISSUE
        </button>
        <button 
          onClick={handleSupport}
          disabled={hasSupported}
          className={`font-black uppercase tracking-widest py-3 border-2 border-black flex items-center justify-center gap-2 transition-colors ${hasSupported ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'}`}
        >
          {hasSupported ? <Bell size={16} /> : <Users size={16} />} 
          {hasSupported ? 'FOLLOWING' : 'FOLLOW ISSUE'}
        </button>
      </div>
    </div>
  );
}
