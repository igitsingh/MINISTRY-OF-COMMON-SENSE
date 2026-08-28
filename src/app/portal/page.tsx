import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function MemberPortal() {
  const cookieStore = await cookies();
  const token = cookieStore.get("mocs_auth_token");

  if (!token?.value) {
    redirect("/access");
  }

  const member = await prisma.member.findUnique({
    where: { access_key: token.value },
    include: { applicant: true }
  });

  if (!member) {
    // Invalid token, remove cookie and redirect
    redirect("/access");
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 sm:p-6 md:p-12 lg:p-24 w-full bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="max-w-4xl w-full space-y-8 md:space-y-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 md:border-b-4 border-white pb-4 md:pb-6">
          <div className="space-y-2 w-full md:w-auto">
            <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white">
              MINISTRY DOSSIER
            </h1>
            <p className="font-bold text-sm md:text-base text-gray-400 font-[family-name:var(--font-mono)] uppercase tracking-widest">
              ID: {member.member_id}
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right w-full md:w-auto">
            <div className="font-bold text-[10px] md:text-xs text-gray-500 font-[family-name:var(--font-mono)] uppercase tracking-tighter">CLEARANCE</div>
            <div className="font-bold text-base md:text-lg text-neon font-[family-name:var(--font-mono)] uppercase tracking-widest">{member.status}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            
            {/* The Archive */}
            <div className="border-2 border-white/20 p-6 md:p-8 space-y-4 md:space-y-6 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="flex justify-between items-center border-b-2 border-white/10 pb-4">
                <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white">
                  THE ARCHIVE
                </h2>
                <span className="text-xs text-gray-500 font-[family-name:var(--font-mono)] uppercase">3 FILES</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-[family-name:var(--font-sans)] text-gray-300 hover:text-white transition-colors">
                  <span>01. The Death of Common Sense</span>
                  <span className="text-neon font-[family-name:var(--font-mono)] text-xs">UNLOCKED</span>
                </div>
                <div className="flex justify-between items-center text-sm font-[family-name:var(--font-sans)] text-gray-300 hover:text-white transition-colors">
                  <span>02. Engineering Scarcity</span>
                  <span className="text-neon font-[family-name:var(--font-mono)] text-xs">UNLOCKED</span>
                </div>
                <div className="flex justify-between items-center text-sm font-[family-name:var(--font-sans)] text-gray-600">
                  <span>03. [REDACTED]</span>
                  <span className="text-gray-600 font-[family-name:var(--font-mono)] text-xs">LOCKED</span>
                </div>
              </div>
            </div>

            {/* Intelligence */}
            <div className="border-2 border-white/20 p-6 md:p-8 space-y-4 md:space-y-6 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-center border-b-2 border-white/10 pb-4">
                <h2 className="text-xl md:text-2xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white">
                  INTELLIGENCE
                </h2>
                <span className="text-xs text-gray-500 font-[family-name:var(--font-mono)] uppercase animate-pulse">NEW DIRECTIVE</span>
              </div>
              <p className="font-[family-name:var(--font-sans)] text-sm md:text-base text-gray-300 leading-relaxed">
                Your first directive has been issued. Physical proximity to Sector 4 is required. Await coordinates.
              </p>
              <div className="pt-2">
                <button className="text-xs font-[family-name:var(--font-mono)] font-bold uppercase text-white border-b border-white hover:text-neon hover:border-neon transition-colors pb-1">
                  [ VIEW DIRECTIVE ]
                </button>
              </div>
            </div>

          </div>

          {/* Sidebar Area */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Artifacts (Physical Goods) */}
            <div className="border-2 border-white/20 p-6 space-y-6 bg-white/5 flex flex-col items-center text-center">
              <div className="w-full border-b-2 border-white/10 pb-4">
                <h2 className="text-lg font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white">
                  ARTIFACT 001
                </h2>
                <div className="font-bold text-[10px] text-gray-400 font-[family-name:var(--font-mono)] uppercase mt-1">
                  PHYSICAL MANIFESTATION
                </div>
              </div>
              
              <div className="w-full aspect-square bg-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-screen pointer-events-none"></div>
                <span className="text-xs font-[family-name:var(--font-mono)] text-gray-500">NO IMAGE AVAILABLE</span>
              </div>
              
              <div className="w-full space-y-4">
                <div className="flex justify-between text-xs font-[family-name:var(--font-mono)]">
                  <span className="text-gray-500">QUANTITY</span>
                  <span className="text-white">127</span>
                </div>
                <div className="flex justify-between text-xs font-[family-name:var(--font-mono)]">
                  <span className="text-gray-500">STATUS</span>
                  <span className="text-neon animate-pulse">AVAILABLE</span>
                </div>
                
                <button className="w-full mocs-button p-4 text-sm font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest mt-2">
                  [ ACQUIRE ASSET ]
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
