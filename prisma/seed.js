import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const johnDoe = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@example.com",
      emailVerified: new Date(),
      image: "",
    },
  });

  const lowerBackAndHipsRegion = await prisma.region.create({
    data: {
      name: "Lower Back and Hips",
    },
  });

  const loadIntolerance = await prisma.diagnostic.create({
    data: {
      name: "Load Intolerance",
      description:
        "This test assesses your exposure to pain under spinal load.",
      videos: ["https://youtu.be/PV4pUmkbXzc?si=HkBi6HWHJm7mOOch&t=35"],
    },
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((error) => {
    throw error;
  });
