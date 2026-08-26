import React from 'react';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, Mail, MapPin } from 'lucide-react';
import ClientActions from './ClientActions';

export default async function IssuePage({ params }: { params: { id: string } }) {
  const c = await prisma.case.findUnique({
    where: { id: params.id },
    include: { authority: true }
  });

  if (!c) {
    notFound();
  }

  // Construct Email payload
  const subject = encodeURIComponent(`URGENT CIVIC ESCALATION: ${c.title} - ${c.locationName || c.city}`);
  
  const bodyText = `Dear ${c.authority ? c.authority.name + ' (' + c.authority.designation + ')' : 'Concerned Authority'},

I am a citizen residing in your jurisdiction writing to urgently document and escalate the following civic failure:

ISSUE: ${c.title}
LOCATION: ${c.locationName}, ${c.city}
CATEGORY: ${c.category}
TRACKING ID: ${c.id}

DESCRIPTION:
${c.description}

This issue represents a significant civic risk and requires immediate administrative attention. It has been publicly documented and is currently being tracked by the community.

Please acknowledge receipt of this escalation and provide a timeline for resolution.

Awaiting your immediate action.

Regards,
A Concerned Citizen`;

  const body = encodeURIComponent(bodyText);
  const toEmail = c.authority?.email && c.authority.email !== 'Not Public' ? c.authority.email : '';
  const emailUrl = `mailto:${toEmail}?subject=${subject}&body=${body}`;

  // Timeline UI Data
  const timeline = [
    { label: "Reported", date: c.reportedAt, active: true },
    { label: "Acknowledged", date: c.acknowledgedAt, active: !!c.acknowledgedAt },
    { label: "In Progress", date: c.inProgressAt, active: !!c.inProgressAt },
    { label: "Resolved", date: c.resolvedAt, active: !!c.resolvedAt },
  ];

  const formatDate = (d: Date | null) => d ? new Date(d).toLocaleDateString('en-GB') : '--';

  return (
    <div className="bg-[var(--ivory)] min-h-screen text-[var(--charcoal)] font-mono pb-24">
      <div className="max-w-[1200px] mx-auto px-6 pt-12">
        <Link href="/forum" className="inline-flex items-center gap-2 uppercase font-black text-xs tracking-widest hover:text-[var(--ministry-red)] transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Directory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* MAIN COLUMN */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* HEADER */}
            <div>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-black bg-white">
                  {c.category}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-black bg-black text-white">
                  {c.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-black leading-tight mb-4">{c.title}</h1>
              <div className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold opacity-70 mb-8">
                <MapPin size={16} />
                {c.locationName}, {c.city}
              </div>

              {/* EVIDENCE / MEDIA */}
              <div className="border-4 border-black aspect-video relative bg-black/5 mb-8">
                <Image src={c.imageUrl} alt="Evidence" fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium">
                <h3>Issue Documentation</h3>
                <p>{c.description}</p>
                
                <h3 className="mt-8 text-[var(--ministry-red)]">Why This Matters</h3>
                <p>Unresolved civic infrastructure like this presents a direct safety hazard and degrades public trust. It contributes to the normalization of civic dysfunction.</p>
              </div>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* AUTHORITY CARD */}
            <div className="border-2 border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
              <h3 className="uppercase font-black text-sm tracking-widest border-b-2 border-black pb-2 mb-4">Responsible Authority</h3>
              {c.authority ? (
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-black leading-none mb-1">{c.authority.name}</div>
                    <div className="text-xs uppercase tracking-widest opacity-60">{c.authority.designation}</div>
                    <div className="text-xs uppercase tracking-widest opacity-60">{c.authority.department || "Municipal Admin"}</div>
                  </div>
                  <div className="pt-4 border-t border-black/10 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="opacity-60">Jurisdiction:</span>
                      <span className="font-bold text-right">{c.authority.jurisdiction}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-60">Email:</span>
                      <span className="font-bold text-right truncate max-w-[150px]">{c.authority.email || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-60">Phone:</span>
                      <span className="font-bold text-right">{c.authority.phone || "N/A"}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="opacity-50 italic">Authority identification pending verification.</div>
              )}

              {/* ACTION BUTTONS */}
              <ClientActions 
                caseId={c.id} 
                emailUrl={emailUrl} 
                initialSupporters={c.supportersCount} 
              />
            </div>

            {/* TIMELINE */}
            <div className="border-2 border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
              <h3 className="uppercase font-black text-sm tracking-widest border-b-2 border-black pb-2 mb-6">Issue Timeline</h3>
              
              <div className="relative border-l-2 border-black/20 ml-3 space-y-8">
                {timeline.map((step, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className={`absolute -left-[11px] top-0 bg-white ${step.active ? 'text-[var(--ministry-red)]' : 'text-black/20'}`}>
                      {step.active ? <CheckCircle2 size={20} className="fill-white" /> : <Circle size={20} className="fill-white" />}
                    </div>
                    <div className={`uppercase tracking-widest text-sm font-black ${step.active ? 'text-black' : 'text-black/40'}`}>
                      {step.label}
                    </div>
                    <div className="text-xs opacity-50 mt-1">
                      {formatDate(step.date)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COMMUNITY STATS */}
            <div className="border-2 border-black bg-[#f4ebd0] p-6 shadow-[6px_6px_0_0_#000]">
              <h3 className="uppercase font-black text-sm tracking-widest border-b-2 border-black pb-2 mb-6">Community Action</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="border border-black bg-white p-4">
                  <div className="text-3xl font-black">{c.supportersCount}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-70 mt-1">Supporters</div>
                </div>
                <div className="border border-black bg-white p-4">
                  <div className="text-3xl font-black">{c.emailsSentCount}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-70 mt-1">Emails Sent</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
