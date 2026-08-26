"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import { UserPlus, Briefcase, FileText, Send } from 'lucide-react';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    codename: '',
    city: '',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Field Agent Application: ${formData.codename || formData.name}`;
    const body = `
APPLICANT DOSSIER
-----------------
NAME: ${formData.name}
CODE NAME: ${formData.codename || 'N/A'}
CITY OF OPERATION: ${formData.city}

REASON FOR ENLISTMENT:
${formData.reason}
    `;
    
    const mailtoLink = `mailto:official.ministryofcommonsense@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-[var(--ivory)] text-[var(--charcoal)] font-sans flex flex-col w-full min-h-screen">
      <Header />
      
      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 md:px-12 py-16 md:py-24">
        
        <div className="flex flex-col items-center text-center mb-12">
          <UserPlus size={64} className="text-[var(--ministry-red)] mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-wider text-[var(--charcoal)] leading-tight">
            Enlist as a Field Agent
          </h1>
          <p className="font-mono text-gray-500 uppercase tracking-widest mt-4 text-sm md:text-base">
            Your city needs you. Probably more than it realizes.
          </p>
        </div>

        {/* CLASSIFIED FOLDER FORM */}
        <div className="bg-[#f4ebd0] p-6 md:p-12 border-2 border-[#d4c5a9] relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-8 bg-amber-200 border-b-2 border-[#d4c5a9] opacity-50 flex items-center px-4">
             <span className="font-mono text-xs uppercase font-bold text-amber-800">Department of Human Resources & Common Sense</span>
          </div>
          
          <div className="absolute -top-6 -right-2 md:-right-6 text-[var(--ministry-red)] font-bold rotate-[15deg] text-xl md:text-2xl border-4 border-[var(--ministry-red)] p-2 bg-white shadow-lg uppercase tracking-widest">
            Classified
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 font-bold uppercase text-sm tracking-wider text-[var(--charcoal)]">
                  <FileText size={16} /> True Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-b-2 border-dashed border-gray-400 p-2 font-mono text-lg focus:outline-none focus:border-[var(--ministry-red)] transition-colors"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="codename" className="flex items-center gap-2 font-bold uppercase text-sm tracking-wider text-[var(--charcoal)]">
                  <Briefcase size={16} /> Desired Code Name
                </label>
                <input 
                  type="text" 
                  id="codename"
                  name="codename"
                  value={formData.codename}
                  onChange={handleChange}
                  className="w-full bg-white border-b-2 border-dashed border-gray-400 p-2 font-mono text-lg focus:outline-none focus:border-[var(--ministry-red)] transition-colors"
                  placeholder="e.g. Agent Pothole"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="font-bold uppercase text-sm tracking-wider text-[var(--charcoal)]">
                City of Operation
              </label>
              <input 
                type="text" 
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-white border-b-2 border-dashed border-gray-400 p-2 font-mono text-lg focus:outline-none focus:border-[var(--ministry-red)] transition-colors"
                placeholder="Where will you be documenting absurdity?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="reason" className="font-bold uppercase text-sm tracking-wider text-[var(--charcoal)] block">
                Why do you want to join the Ministry?
              </label>
              <textarea 
                id="reason"
                name="reason"
                required
                rows={4}
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-white border-2 border-dashed border-gray-400 p-4 font-mono text-base focus:outline-none focus:border-[var(--ministry-red)] transition-colors resize-y"
                placeholder="e.g. I saw a speed breaker that was taller than my car..."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[var(--charcoal)] text-white font-black uppercase tracking-widest py-4 md:py-5 border-2 border-black hover:bg-[var(--gold)] hover:text-black transition-colors flex items-center justify-center gap-3 text-lg"
            >
              <Send size={24} />
              Submit Dossier via Secure Mail
            </button>
            <p className="text-center font-mono text-xs text-gray-500 mt-4">
              Note: Clicking submit will open your default email client to securely transmit your data to official.ministryofcommonsense@gmail.com
            </p>
          </form>
        </div>

      </main>
    </div>
  );
}
