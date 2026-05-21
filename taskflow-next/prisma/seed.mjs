import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main()
{
  await prisma.user.create({
    data: { email: "admin@taskflow.com", password: "admin123", name: "Admin" },
  });
  await prisma.project.createMany({
    data: [
      { name: "App Mobile", color: "#3498db" },
      { name: "API Back", color: "#2ecc71" },
    ],
  });
  console.log("Seed done!");
}

main().finally(() => prisma.$disconnect());