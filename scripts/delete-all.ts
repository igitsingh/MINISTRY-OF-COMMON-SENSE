import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Deleting all records...");
  await prisma.comment.deleteMany();
  await prisma.case.deleteMany();
  await prisma.authority.deleteMany();
  console.log("✅ All records deleted.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
