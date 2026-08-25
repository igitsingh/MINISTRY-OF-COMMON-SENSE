import Header from "@/components/Header";
import prisma from "@/lib/prisma";

// Homepage Sections
import HeroSection from "@/components/home/HeroSection";
import LiveStats from "@/components/home/LiveStats";
import BrokenWindows from "@/components/home/BrokenWindows";
import EvidenceWall from "@/components/home/EvidenceWall";
import CommonSenseTest from "@/components/home/CommonSenseTest";
import Doctrines from "@/components/home/Doctrines";
import GlobalComparison from "@/components/home/GlobalComparison";
import MapCTA from "@/components/home/MapCTA";
import AgentRecruitment from "@/components/home/AgentRecruitment";
import HallOfAction from "@/components/home/HallOfAction";
import Manifesto from "@/components/home/Manifesto";
import FinalCTA from "@/components/home/FinalCTA";

export default async function Home() {
  // Fetch Statistics
  const activeAgents = await prisma.agent.count(); // Count all agents instead of just active for now
  const openCases = await prisma.case.count({ where: { status: 'REPORTED' } });
  const resolvedCasesCount = await prisma.case.count({ where: { status: 'RESOLVED' } });
  const completedProjects = 0; // Fallback handles this in LiveStats

  // Fetch Latest Open Cases for Evidence Wall
  const latestCases = await prisma.case.findMany({
    where: { status: 'REPORTED' },
    orderBy: { createdAt: 'desc' },
    take: 8,
    select: {
      id: true,
      title: true,
      locationName: true,
      city: true,
      imageUrl: true,
    }
  });

  // Fetch Resolved Cases for Hall of Action
  const resolvedCases = await prisma.case.findMany({
    where: { status: 'RESOLVED' },
    orderBy: { createdAt: 'desc' },
    take: 5,
    select: {
      id: true,
      title: true,
      city: true,
    }
  });

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] font-sans">
      <Header />
      
      <main>
        {/* SECTION 1 — THE ACCUSATION */}
        <HeroSection />

        {/* SECTION 2 — THE NUMBERS */}
        <LiveStats 
          activeAgents={activeAgents} 
          openCases={openCases} 
          resolvedCases={resolvedCasesCount} 
          completedProjects={completedProjects} 
        />

        {/* SECTION 3 — THE BROKEN WINDOWS MOMENT */}
        <BrokenWindows />

        {/* SECTION 4 — LIVE EVIDENCE WALL */}
        <EvidenceWall cases={latestCases} />

        {/* SECTION 5 — THE COMMON SENSE TEST */}
        <CommonSenseTest />

        {/* SECTION 6 — THE SIX DOCTRINES */}
        <Doctrines />

        {/* SECTION 7 — GLOBAL COMMON SENSE */}
        <GlobalComparison />

        {/* SECTION 8 — THE MAP */}
        <MapCTA />

        {/* SECTION 9 — AGENTS */}
        <AgentRecruitment />

        {/* SECTION 10 — HALL OF ACTION */}
        <HallOfAction victories={resolvedCases} />

        {/* SECTION 11 — THE MANIFESTO */}
        <Manifesto />

        {/* FINAL SECTION */}
        <FinalCTA />
      </main>
    </div>
  );
}
