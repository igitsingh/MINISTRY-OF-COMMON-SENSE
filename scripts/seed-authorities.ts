import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const mockAuthorities = [
  {
    name: "Dr. Anjali Reddy",
    designation: "Zonal Commissioner",
    department: "Municipal Administration",
    jurisdiction: "Bellandur Zone",
    city: "Bengaluru",
    email: "zonal.comm.bellandur@bbmp.gov.in",
    phone: "080-2222-3333"
  },
  {
    name: "Suresh Kumar",
    designation: "Executive Engineer",
    department: "Roads & Infrastructure",
    jurisdiction: "Vasant Kunj Ward",
    city: "Delhi",
    email: "ee.roads.vasantkunj@mcd.gov.in",
    phone: "011-2345-6789"
  },
  {
    name: "Amitabh Thakur",
    designation: "Chief Sanitary Inspector",
    department: "Solid Waste Management",
    jurisdiction: "Gomti Nagar",
    city: "Lucknow",
    email: "sanitation.gomtinagar@lmc.gov.in",
    phone: "+91 98111 22233"
  }
];

async function main() {
  console.log("Seeding Authorities...");

  for (const a of mockAuthorities) {
    const { city, ...authorityData } = a;
    
    // Create authority
    const authority = await prisma.authority.create({
      data: {
        ...authorityData,
        city
      }
    });

    // Link any cases from that specific jurisdiction to this authority
    await prisma.case.updateMany({
      where: {
        city: city,
        locationName: authorityData.jurisdiction
      },
      data: {
        authorityId: authority.id
      }
    });
  }

  console.log("✅ Seeded authorities and linked cases successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
