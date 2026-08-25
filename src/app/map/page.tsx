"use client";

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from '@/components/Header';
import { ShieldAlert, Crosshair } from 'lucide-react';

export default function IndiaMapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [hasValidToken, setHasValidToken] = useState(true);

  // Mock data for now
  const cityData = [
    { city: "Meerut", lng: 77.7064, lat: 28.9845, agents: 12, cases: 48, resolved: 11 },
    { city: "New Delhi", lng: 77.2090, lat: 28.6139, agents: 45, cases: 120, resolved: 34 },
    { city: "Mumbai", lng: 72.8777, lat: 19.0760, agents: 30, cases: 85, resolved: 22 },
  ];

  useEffect(() => {
    if (map.current) return;
    
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token || token.includes('your_mapbox_token_here')) {
      setHasValidToken(false);
      return;
    }

    mapboxgl.accessToken = token;

    try {
      if (!mapContainer.current) return;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-v9', // Satellite theme
        center: [78.9629, 20.5937], // Center of India
        zoom: 4,
        pitch: 45,
      });

      map.current.on('load', () => {
        // Add markers for each city
        cityData.forEach(city => {
          // Create custom marker element
          const el = document.createElement('div');
          el.className = 'w-6 h-6 bg-red-600 rounded-full border-2 border-yellow-400 shadow-[0_0_15px_rgba(255,0,0,0.8)] animate-pulse flex items-center justify-center';
          el.innerHTML = '<div class="w-2 h-2 bg-yellow-400 rounded-full"></div>';

          // Create popup
          const popupHTML = `
            <div class="bg-black text-white p-3 font-mono text-xs border-2 border-red-600 shadow-[4px_4px_0_0_#ff0000]">
              <div class="font-black text-yellow-400 text-lg mb-2 border-b border-gray-700 pb-1">${city.city.toUpperCase()}</div>
              <div class="flex justify-between mb-1"><span>AGENTS:</span> <span class="font-bold">${city.agents}</span></div>
              <div class="flex justify-between mb-1"><span>ACTIVE CASES:</span> <span class="font-bold">${city.cases}</span></div>
              <div class="flex justify-between text-green-400"><span>RESOLVED:</span> <span class="font-bold">${city.resolved}</span></div>
            </div>
          `;

          const popup = new mapboxgl.Popup({ offset: 25, closeButton: false }).setHTML(popupHTML);

          new mapboxgl.Marker(el)
            .setLngLat([city.lng, city.lat])
            .setPopup(popup)
            .addTo(map.current!);
        });
      });
    } catch (err) {
      console.error("Mapbox init error:", err);
      setHasValidToken(false);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans flex flex-col">
      <Header />

      <div className="bg-red-700 text-white font-mono text-sm py-2 overflow-hidden border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-yellow-300">
            <ShieldAlert size={16} />
            NATIONAL INTELLIGENCE MAP
            <ShieldAlert size={16} />
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col p-6">
        <div className="mb-6 border-b-4 border-black pb-4">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-[var(--ministry-red)]">
            Active Zones
          </h1>
          <p className="font-mono opacity-80 mt-2">
            Click on a pulsing red zone to view the local civic intelligence report.
          </p>
        </div>

        <div className="flex-1 relative border-4 border-black shadow-[8px_8px_0_0_#000] bg-black overflow-hidden min-h-[500px]">
          {hasValidToken ? (
            <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-red-600 font-mono text-center p-6 border-4 border-dashed border-red-900 m-4">
              <Crosshair size={48} className="mb-4 opacity-50 animate-pulse" />
              <h3 className="text-xl font-bold mb-2">SAT-LINK OFFLINE</h3>
            </div>
          )}
          
          {/* SCANLINE EFFECT */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
          
          {/* Overlay UI */}
          <div className="absolute top-4 left-4 bg-black/80 text-white p-3 border border-red-900 font-mono text-xs pointer-events-none">
            <div className="text-red-500 font-bold mb-1 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              LIVE TRACKING
            </div>
            <div>STATUS: ONLINE</div>
            <div>SATELLITE: MOCS-1</div>
          </div>
        </div>
      </main>
    </div>
  );
}
