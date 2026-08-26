import Header from '@/components/Header';
import { ShieldAlert, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhySmallThingsMatterPage() {
  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans">
      <Header />

      <div className="bg-red-700 text-white font-mono text-sm py-2 overflow-hidden border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-yellow-300">
            <ShieldAlert size={16} />
            CRITICAL DOCTRINE FILE #001
            <ShieldAlert size={16} />
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto p-6 md:p-12 mt-4">
        
        <div className="mb-12 text-center border-b-8 border-black pb-8">
          <h1 className="text-5xl md:text-6xl font-serif font-black uppercase tracking-tighter text-[var(--ministry-red)] leading-none mb-4">
            Why Small Things Matter
          </h1>
          <p className="text-xl font-mono text-gray-700 max-w-2xl mx-auto">
            "Why are you talking about dustbins when bigger issues exist?"
          </p>
        </div>

        <div className="prose prose-lg md:prose-xl max-w-none font-serif text-gray-800 leading-relaxed mb-16">
          <p className="text-2xl font-bold mb-8">
            This is the most common question we receive. It is also the most dangerous misconception in civic planning.
          </p>

          <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] mb-12">
            <h2 className="text-3xl font-black uppercase tracking-widest text-black mb-8 flex items-center gap-3">
              <AlertCircle size={32} className="text-[var(--ministry-red)]" />
              The Math of Neglect
            </h2>
            
            <div className="space-y-6 font-mono text-lg font-bold">
              <div className="bg-gray-100 p-4 border-l-8 border-[var(--ministry-red)] flex flex-col sm:flex-row sm:items-center justify-between">
                <span>One pothole</span>
                <span className="text-[var(--ministry-red)] my-2 sm:my-0">=</span>
                <span className="text-right">Damaged vehicles & traffic slowdowns</span>
              </div>
              
              <div className="bg-gray-100 p-4 border-l-8 border-[var(--ministry-red)] flex flex-col sm:flex-row sm:items-center justify-between">
                <span>One broken signal</span>
                <span className="text-[var(--ministry-red)] my-2 sm:my-0">=</span>
                <span className="text-right">Accidents & gridlock</span>
              </div>
              
              <div className="bg-gray-100 p-4 border-l-8 border-[var(--ministry-red)] flex flex-col sm:flex-row sm:items-center justify-between">
                <span>One missing streetlight</span>
                <span className="text-[var(--ministry-red)] my-2 sm:my-0">=</span>
                <span className="text-right">Safety concerns & increased crime</span>
              </div>
              
              <div className="bg-gray-100 p-4 border-l-8 border-[var(--ministry-red)] flex flex-col sm:flex-row sm:items-center justify-between">
                <span>One blocked drain</span>
                <span className="text-[var(--ministry-red)] my-2 sm:my-0">=</span>
                <span className="text-right">Urban flooding & disease</span>
              </div>
            </div>
          </div>

          <p className="text-2xl mb-8">
            Small problems compound. A city that cannot fix a broken dustbin will never be able to build a world-class public transport system. 
          </p>
          
          <p>
            When citizens and authorities ignore the "small things", it sends a powerful psychological signal: <strong>Nobody cares about this space.</strong> Once that signal is broadcast, the area deteriorates rapidly.
          </p>

          <p className="font-bold text-3xl my-12 text-center text-[var(--ministry-red)]">
            Excellence is a habit, not an isolated event.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-16 border-t-4 border-black pt-12">
          <Link href="/doctrines" className="flex-1 text-center bg-black text-white font-black uppercase tracking-widest py-4 border-2 border-black hover:bg-gray-800 transition-colors shadow-[4px_4px_0_0_var(--gold)]">
            Read Ministry Doctrines
          </Link>
          <Link href="/library" className="flex-1 text-center bg-white text-black font-black uppercase tracking-widest py-4 border-2 border-black hover:bg-gray-100 transition-colors shadow-[4px_4px_0_0_#000]">
            Back to Library
          </Link>
        </div>

      </main>
    </div>
  );
}
