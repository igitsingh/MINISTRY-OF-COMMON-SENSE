"use client";

import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Header from "@/components/Header";
import Link from 'next/link';
import Image from 'next/image';
import { Crosshair, UploadCloud, FileWarning, ShieldAlert, Satellite, FileSearch } from 'lucide-react';
import { submitCase } from '@/app/actions/submitCase';

export default function SubmitEvidence() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(77.2090); // Default Delhi
  const [lat, setLat] = useState(28.6139);
  const [zoom, setZoom] = useState(12);
  const [targetLocked, setTargetLocked] = useState(false);
  const [hasValidToken, setHasValidToken] = useState(true);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [locationName, setLocationName] = useState("");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    // Show immediate local preview
    const objectUrl = URL.createObjectURL(file);
    setImageUrl(objectUrl);

    const uploadData = new FormData();
    uploadData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });
      const data = await res.json();
      
      if (data.success) {
        setImageUrl(data.imageUrl);
      } else {
        alert("Upload failed: " + data.error);
        setImageUrl("");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading file.");
      setImageUrl("");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) {
      alert("Please upload visual evidence.");
      return;
    }
    
    const formData = new FormData();
    formData.append('imageUrl', imageUrl);
    formData.append('description', description);
    formData.append('lat', lat.toString());
    formData.append('lng', lng.toString());
    // In a real app we'd reverse-geocode or get city/ward from user input
    // formData.append('city', 'New Delhi'); 
    
    await submitCase(formData);
  };

  useEffect(() => {
    if (map.current) return;
    
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token || token.includes('dummy')) {
      setHasValidToken(false);
      return;
    }
    
    mapboxgl.accessToken = token;
    
    if (mapContainer.current) {
      try {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/satellite-streets-v12',
          center: [lng, lat],
          zoom: zoom
        });

        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
          marker: false,
          placeholder: 'Search location...',
          countries: 'in',
        });
        map.current.addControl(geocoder, 'top-left');

        // Fix for React/Next.js rendering the map before container has dimensions
        setTimeout(() => {
          if (map.current) {
            map.current.resize();
          }
        }, 100);

        map.current.on('move', () => {
          if (!map.current) return;
          setLng(parseFloat(map.current.getCenter().lng.toFixed(4)));
          setLat(parseFloat(map.current.getCenter().lat.toFixed(4)));
          setZoom(parseFloat(map.current.getZoom().toFixed(2)));
        });

        map.current.on('moveend', async () => {
          if (!map.current) return;
          const currentLng = map.current.getCenter().lng;
          const currentLat = map.current.getCenter().lat;
          try {
            const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${currentLng},${currentLat}.json?access_token=${mapboxgl.accessToken}`);
            const data = await res.json();
            if (data.features && data.features.length > 0) {
              setLocationName(data.features[0].place_name);
            } else {
              setLocationName("Unknown Location");
            }
          } catch (e) {
            console.error("Reverse geocoding failed", e);
          }
        });

        // Trigger initial reverse geocode
        map.current.fire('moveend');
      } catch (err) {
        console.error("Mapbox init error:", err);
        setHasValidToken(false);
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans">
      
      {/* HEADER (Matches Homepage) */}
      <Header />

      {/* CLASSIFIED BANNER */}
      <div className="bg-red-700 text-white font-mono text-sm py-2 overflow-hidden border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-yellow-300">
            <ShieldAlert size={16} />
            CLASSIFIED EVIDENCE SUBMISSION TERMINAL
            <ShieldAlert size={16} />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6 mt-4 grid md:grid-cols-2 gap-8">
        
        {/* COORDINATE LOCK SYSTEM */}
        <section className="bg-white border-4 border-[var(--ministry-red)] rounded overflow-hidden shadow-2xl relative flex flex-col">
          <div className="bg-[var(--ministry-red)] p-3 flex justify-between items-center text-[var(--ivory)] border-b-4 border-[var(--gold)]">
            <span className="font-mono text-sm font-bold tracking-widest">SATELLITE SURVEILLANCE FEED</span>
            <span className="font-mono text-xs text-red-400 animate-pulse font-bold">● REC</span>
          </div>
          
          <div className="relative flex-1 min-h-[400px] bg-black">
            {hasValidToken ? (
              <div ref={mapContainer} className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%' }} />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-red-600 font-mono text-center p-6 border-4 border-dashed border-red-900 m-4">
                <Satellite size={48} className="mb-4 opacity-50 animate-pulse" />
                <h3 className="text-xl font-bold mb-2">SAT-LINK OFFLINE</h3>
                <p className="text-sm opacity-80 mb-4">Awaiting API Authorization Clearance (Missing Mapbox Token)</p>
                <div className="bg-red-900/50 p-2 text-xs border border-red-700 text-left w-full max-w-sm">
                  <code>To restore feed:</code><br/>
                  <code>1. Get a token from mapbox.com</code><br/>
                  <code>2. Add NEXT_PUBLIC_MAPBOX_TOKEN to .env</code>
                </div>
              </div>
            )}
            
            {/* CROSSHAIR OVERLAY */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
               <Crosshair size={64} className="text-red-600 opacity-80" strokeWidth={1} />
            </div>

            {/* SCANLINE EFFECT */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
          </div>

          <div className="bg-white p-4 border-t-4 border-[var(--ministry-red)]">
            {locationName && (
              <div className="font-mono text-xs mb-3 text-[var(--charcoal)] font-bold bg-gray-100 p-2 border border-gray-300">
                <span className="text-[var(--ministry-red)] mr-2">DETECTED REGION:</span> 
                {locationName}
              </div>
            )}
            <div className="flex justify-between items-center font-mono text-sm mb-4 text-[var(--ministry-red)] font-bold">
              <div>LAT: {lat}</div>
              <div>LNG: {lng}</div>
              <div>ALT: {(zoom * 100).toFixed(0)}m</div>
            </div>
            
            <button 
              onClick={() => setTargetLocked(true)}
              disabled={!hasValidToken}
              className={`w-full py-3 font-black tracking-widest uppercase transition-all border-2 border-[var(--ministry-red)] ${
                targetLocked 
                  ? 'bg-red-700 text-white cursor-not-allowed border-red-700' 
                  : hasValidToken 
                    ? 'bg-[var(--gold)] text-[var(--ministry-red)] hover:bg-yellow-400'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300'
              }`}
            >
              {targetLocked ? 'TARGET LOCKED' : 'LOCK IN TARGET COORDINATES'}
            </button>
          </div>
        </section>

        {/* EVIDENCE UPLOAD SYSTEM */}
        <section className="bg-[#f4ebd0] text-black p-6 md:p-8 border-l-[8px] md:border-l-[16px] border-[#d4c5a9] shadow-2xl relative md:rotate-1 md:hover:rotate-0 transition-transform mt-8 md:mt-0">
          <div className="absolute top-4 right-4 border-4 border-[var(--charcoal)] text-[var(--charcoal)] font-black uppercase tracking-widest px-2 py-1 rotate-[-15deg] opacity-80 text-xs md:text-xl">
            Classified
          </div>
          
          <div className="border-b-2 border-[var(--ministry-red)] pb-4 mb-6 pr-4 md:pr-32">
             <h2 className="text-2xl md:text-3xl font-serif font-black uppercase tracking-wider text-[var(--ministry-red)] mt-6 md:mt-0">File A Case Report</h2>
             <div className="font-mono text-xs md:text-sm font-bold text-gray-500 mt-1">OFFICIAL INVESTIGATION FORM</div>
          </div>
          
          <p className="font-mono text-sm text-[var(--charcoal)] mb-8 bg-white/50 p-3 border border-[#d4c5a9]">
            WARNING: Falsifying civic incompetence is a federal offense (in our hearts). Ensure the uploaded evidence clearly demonstrates a catastrophic failure of common sense.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-bold mb-2 uppercase text-sm tracking-wider text-[var(--ministry-red)]">Visual Evidence (Required)</label>
              
              <div className="relative">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  disabled={isUploading}
                />
                <div className={`border-2 border-dashed border-[var(--ministry-red)] bg-white rounded p-8 text-center transition-colors group ${isUploading ? 'opacity-50' : 'hover:bg-[#fcfaf5]'}`}>
                  {imageUrl ? (
                    <div className="relative w-full h-48 mb-4">
                      <Image src={imageUrl} alt="Uploaded evidence" fill className="object-cover rounded" />
                    </div>
                  ) : (
                    <UploadCloud size={48} className="mx-auto text-gray-400 group-hover:text-[var(--gold)] transition-colors mb-4" />
                  )}
                  
                  <p className="font-bold text-lg text-[var(--charcoal)]">
                    {isUploading ? 'Uploading to Database...' : imageUrl ? 'Evidence Attached (Click to change)' : 'Click to Upload Photo'}
                  </p>
                  {!imageUrl && <p className="text-sm text-gray-500 mt-2 font-mono">Image is required for AI Analysis.</p>}
                </div>
              </div>
            </div>

            <div>
              <label className="block font-bold mb-2 uppercase text-sm tracking-wider text-[var(--ministry-red)]">Incident Description</label>
              <textarea 
                className="w-full border-2 border-[var(--ministry-red)] p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white"
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Someone paved over a living tree trunk to make space for a scooter."
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-[var(--ministry-red)] text-[var(--ivory)] font-black tracking-widest uppercase py-4 border-b-4 border-black hover:bg-green-900 transition-colors flex items-center justify-center gap-2">
              <FileWarning size={20} className="text-[var(--gold)]" />
              Transmit to Central Bureau
            </button>
            <p className="text-center font-mono text-xs text-gray-500 mt-2">
              Opens email client to send to official.ministryofcommonsense@gmail.com
            </p>
          </form>
        </section>

      </main>
    </div>
  );
}
