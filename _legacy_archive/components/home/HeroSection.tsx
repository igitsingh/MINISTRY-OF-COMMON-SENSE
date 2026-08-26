"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const images = [
  "https://images.unsplash.com/photo-1595278455648-fb2bb1e89ce3?q=80&w=2000&auto=format&fit=crop", // Garbage
  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2000&auto=format&fit=crop", // Pothole
  "https://images.unsplash.com/photo-1582212952409-7a329ef31855?q=80&w=2000&auto=format&fit=crop", // Traffic chaos
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white border-b-8 border-[var(--gold)]">
      
      {/* Background Images */}
      {images.map((src, idx) => (
        <div 
          key={idx}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url(${src})`,
            opacity: currentImage === idx ? 0.4 : 0,
            transform: currentImage === idx ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 1s ease-in-out, transform 4s ease-out'
          }}
        />
      ))}

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-serif font-black uppercase tracking-tighter text-white leading-none mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          Why Is This<br/>Normal?
        </h1>
        
        <div className="max-w-2xl mx-auto font-mono text-xl md:text-2xl font-bold bg-black/60 p-6 border-l-4 border-[var(--ministry-red)] backdrop-blur-sm mb-12">
          <p className="mb-2">Every city has problems.</p>
          <p className="text-[var(--gold)]">The real problem is when everyone stops noticing them.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
          <Link href="/submit" className="flex-1 bg-[var(--ministry-red)] text-white font-black uppercase tracking-widest text-lg px-8 py-4 border-2 border-white shadow-[8px_8px_0_0_#fff] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#fff] transition-all text-center">
            Report Evidence
          </Link>
          <Link href="/map" className="flex-1 bg-black text-white font-black uppercase tracking-widest text-lg px-8 py-4 border-2 border-[var(--gold)] shadow-[8px_8px_0_0_var(--gold)] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_var(--gold)] transition-all text-center">
            Explore The Map
          </Link>
        </div>
      </div>
    </section>
  );
}
