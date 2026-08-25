const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const mayor = await prisma.official.findFirst({ where: { designation: 'Mayor' } });
  
  if (!mayor) {
    console.log("No mayor found. Run seed-officials.ts first.");
    return;
  }
  
  const testCase = await prisma.case.create({
    data: {
      title: 'Massive Pothole near Meerut College',
      description: 'A 3-foot wide pothole causing traffic jams.',
      score: 85,
      imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2000&auto=format&fit=crop',
      category: 'Roads',
      status: 'OPEN',
      officialId: mayor.id
    }
  });

  console.log(`Created Case: ${testCase.title} linked to ${mayor.name}`);
}

main().finally(() => prisma.$disconnect());
