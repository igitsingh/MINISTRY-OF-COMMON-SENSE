import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const mockCases = [
  {
    title: "Massive Pothole near Meerut College",
    description: "A 3-foot wide pothole causing traffic jams and minor accidents every single day. The road hasn't been repaired since the monsoons.",
    category: "ROADS",
    city: "Bengaluru",
    locationName: "Bellandur Zone",
    supportersCount: 412,
    emailsSentCount: 34,
    status: "REPORTED",
    agentName: "Anonymous Citizen",
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "No Streetlights on Cantt Stretch",
    description: "Total darkness on a major 2km stretch. Extremely unsafe for women returning home from work.",
    category: "ELECTRICITY",
    city: "Delhi",
    locationName: "Vasant Kunj Ward",
    supportersCount: 842,
    emailsSentCount: 122,
    status: "IN_PROGRESS",
    acknowledgedAt: new Date(Date.now() - 86400000 * 2), // 2 days ago
    inProgressAt: new Date(Date.now() - 86400000), // 1 day ago
    agentName: "Priya S.",
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Open Sewers in City Market",
    description: "The main market area has overflowing open sewers for the past two weeks. The stench is unbearable and shops are losing business.",
    category: "WATER",
    city: "Lucknow",
    locationName: "Gomti Nagar",
    supportersCount: 521,
    emailsSentCount: 88,
    status: "ACKNOWLEDGED",
    acknowledgedAt: new Date(Date.now() - 3600000 * 5), // 5 hours ago
    agentName: "Nitin Kamath",
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2000&auto=format&fit=crop"
  }
];

async function main() {
  console.log("Seeding Forum with mock cases...");

  for (const c of mockCases) {
    await prisma.case.create({
      data: {
        ...c
      }
    });
  }

  console.log("✅ Seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
