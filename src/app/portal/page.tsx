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
      
      <div className="max-w-3xl w-full space-y-8 md:space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 border-b-2 md:border-b-4 border-neon pb-4 md:pb-8">
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter uppercase text-neon">
            MINISTRY PORTAL
          </h1>
          <p className="font-bold text-xs md:text-sm text-white uppercase tracking-tighter animate-pulse">
            SECURE CONNECTION ESTABLISHED
          </p>
        </div>

        {/* Member Dossier */}
        <div className="border-2 border-white/20 p-6 md:p-8 space-y-6 md:space-y-8 bg-black/50 backdrop-blur-sm relative overflow-hidden mx-2 md:mx-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-2 border-white/20 pb-4 md:pb-6">
            <div className="space-y-1 md:space-y-2">
              <div className="font-bold text-xs md:text-sm text-neon uppercase tracking-tighter">MEMBER DOSSIER</div>
              <div className="font-bold text-2xl sm:text-3xl md:text-5xl text-white uppercase tracking-tighter break-all">{member.member_id}</div>
            </div>
            <div className="mt-4 sm:mt-0 text-left sm:text-right space-y-1">
              <div className="font-bold text-[10px] md:text-xs text-gray-500 uppercase tracking-tighter">STATUS</div>
              <div className="font-bold text-base md:text-lg text-neon uppercase tracking-tighter">{member.status}</div>
            </div>
          </div>

          <div className="space-y-2 md:space-y-4">
            <div className="font-bold text-sm md:text-lg text-white uppercase tracking-tighter leading-tight max-w-lg">
              YOU ARE NOW INSIDE THE MINISTRY. THIS PORTAL IS YOUR PRIMARY INTERFACE FOR EXCLUSIVE ARCHIVES AND UPCOMING PHYSICAL DROPS.
            </div>
          </div>
        </div>

        {/* Drop 001 Revealed */}
        <div className="border-2 border-neon p-6 md:p-12 flex flex-col items-center justify-center min-h-[30vh] md:min-h-[40vh] bg-neon/5 backdrop-blur-sm relative overflow-hidden group hover:bg-neon/10 transition-colors mx-2 md:mx-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-screen pointer-events-none"></div>
          
          <div className="text-center space-y-6 md:space-y-8 z-10 w-full">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white mb-2">
                DROP 001
              </h2>
              <div className="font-bold text-xs md:text-sm text-neon uppercase tracking-tighter">
                AVAILABLE FOR 48 HOURS
              </div>
            </div>

            <div className="font-bold text-sm md:text-lg text-white uppercase tracking-tighter max-w-sm mx-auto leading-tight px-4 md:px-0">
              THE FIRST PHYSICAL MANIFESTATION OF THE MINISTRY IS FORGED. <br className="hidden md:block"/><span className="text-neon block md:inline mt-1 md:mt-0">QUANTITY: 127.</span>
            </div>

            <div className="pt-4 w-full px-4 md:px-0">
              <button className="w-full md:w-auto pixel-border px-6 md:px-10 py-4 md:py-6 font-bold uppercase tracking-tighter text-base md:text-xl hover:bg-white hover:text-black transition-colors duration-300">
                [ SECURE ALLOCATION ]
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex justify-between font-bold text-[10px] md:text-xs text-neon uppercase tracking-tighter">
            <div>ACCESS: MEMBERS ONLY</div>
            <div className="animate-pulse">STATUS: UNLOCKED</div>
          </div>
        </div>

      </div>
    </div>
  );
}
