const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.agent.create({
    data: {
      name: "Sachin",
      city: "Meerut",
      area: "Prabhat Nagar",
      casesReported: 17,
      casesResolved: 4,
      status: "ACTIVE FIELD AGENT"
    }
  });

  await prisma.agent.create({
    data: {
      name: "Riya Sharma",
      city: "Delhi",
      area: "Connaught Place",
      casesReported: 42,
      casesResolved: 12,
      status: "ACTIVE FIELD AGENT"
    }
  });

  await prisma.actionFund.create({
    data: {
      title: "Install Public Dustbins",
      problem: "No dustbins in the market leading to littering",
      location: "Prabhat Nagar Market, Meerut",
      estimatedCost: 6000,
      fundsRaised: 3200,
      status: "FUNDING"
    }
  });
  
  console.log("Database seeded!");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
