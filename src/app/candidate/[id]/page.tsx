import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function CandidateDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const candidate = await prisma.applicant.findUnique({
    where: { candidate_number: id },
    include: { member: true }
  });

  if (!candidate) {
    notFound();
  }

  const [totalApplications, pendingReview, accepted] = await Promise.all([
    prisma.applicant.count(),
    prisma.applicant.count({ where: { status: "PENDING" } }),
    prisma.applicant.count({ where: { status: "APPROVED" } })
  ]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-24 w-full bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="max-w-md w-full space-y-8 md:space-y-12 relative z-10">
        <div className="text-center space-y-3 md:space-y-4 border-b-2 md:border-b-4 border-white pb-4 md:pb-8">
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-brand)] font-bold tracking-tighter uppercase text-white mb-4 md:mb-6">
            DOSSIER FILED
          </h1>
          <div className="text-xs md:text-sm font-bold text-gray-400 font-[family-name:var(--font-sans)] space-y-1 md:space-y-2 uppercase tracking-tighter text-left max-w-sm mx-auto leading-tight px-4 md:px-0">
            <p className="font-[family-name:var(--font-mono)]">REFERENCE: <span className="text-white">{candidate.candidate_number}</span></p>
            <p className="font-[family-name:var(--font-mono)]">STATUS: <span className={candidate.status === "APPROVED" ? "text-neon" : "text-white"}>{candidate.status.replace('_', ' ')}</span></p>
            <p className="font-[family-name:var(--font-mono)]">NEXT REVIEW WINDOW: 72 HOURS</p>
            <p className="pt-2 md:pt-4 text-gray-500">DO NOT SUBMIT AGAIN.</p>
          </div>
        </div>

        <div className="border-2 border-white/20 p-6 md:p-8 space-y-6 md:space-y-8 bg-black/50 backdrop-blur-sm mx-4 md:mx-0">

          <div className="space-y-4 md:space-y-6 pt-2 md:pt-4">
            <div className="flex justify-between">
              <div className="font-bold text-[10px] md:text-xs text-gray-400 font-[family-name:var(--font-mono)] uppercase tracking-tighter">APPLICATIONS RECEIVED</div>
              <div className="font-bold text-[10px] md:text-xs text-white font-[family-name:var(--font-mono)] tracking-widest">{totalApplications.toLocaleString()}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold text-[10px] md:text-xs text-gray-400 font-[family-name:var(--font-mono)] uppercase tracking-tighter">PENDING REVIEW</div>
              <div className="font-bold text-[10px] md:text-xs text-white font-[family-name:var(--font-mono)] tracking-widest">{pendingReview.toLocaleString()}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold text-[10px] md:text-xs text-gray-400 font-[family-name:var(--font-mono)] uppercase tracking-tighter">ACCEPTED</div>
              <div className="font-bold text-[10px] md:text-xs text-white font-[family-name:var(--font-mono)] tracking-widest">{accepted.toLocaleString()}</div>
            </div>
            <div className="flex justify-between border-t-2 border-white/20 pt-4 md:pt-6">
              <div className="font-bold text-[10px] md:text-xs text-gray-400 font-[family-name:var(--font-mono)] uppercase tracking-tighter">CURRENT INTAKE</div>
              <div className="font-bold text-[10px] md:text-xs text-neon font-[family-name:var(--font-mono)] uppercase tracking-tighter animate-pulse">OPEN</div>
            </div>
          </div>
        </div>

        {candidate.status === "APPROVED" && (
          <div className="pt-2 md:pt-4 space-y-4 px-4 md:px-0">
            <div className="border-2 border-white/20 p-4 md:p-6 text-center space-y-2 md:space-y-4 bg-white/5">
              <div className="font-bold text-xs md:text-sm text-neon font-[family-name:var(--font-mono)] uppercase tracking-tighter animate-pulse">FOUNDING MEMBER RECOGNIZED</div>
              <div className="text-xl md:text-3xl font-[family-name:var(--font-mono)] font-bold text-white uppercase tracking-tighter truncate">{candidate.member?.access_key || "PENDING-GENERATION"}</div>
              <div className="font-bold text-[10px] md:text-xs text-gray-400 font-[family-name:var(--font-sans)] uppercase tracking-tighter leading-tight mt-2 md:mt-4">Save this key. It is your mark of acceptance.</div>
            </div>
            <Link 
              href="/access"
              className="w-full block text-center mocs-button p-4 font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-base md:text-lg"
            >
              [ ENTER PORTAL ]
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
