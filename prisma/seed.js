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
      Diagnostic: {
        create: [
          {
            name: "Load Intolerance",
            description:
              "This test assesses your exposure to pain under spinal load.",
            videos: [
              "https://www.youtube.com/embed/PV4pUmkbXzc?si=o7PMjaNFuOIVWrxJ&amp;start=35",
            ],
          },
          {
            name: "Flexion Intolerance",
            description:
              "This test assesses your exposure to pain when flexing the spine.",
            videos: ["https://www.youtube.com/embed/iUfd-GZHb3c"],
          },
          {
            name: "Gluteal Amnesia",
            description:
              "Malfunctioning glutes are a potential cause of back & hip pain. This test assesses glute participation.",
            videos: [
              "https://www.youtube.com/embed/KypIeyFCUa8",
              "https://www.youtube.com/embed/RWF8baFGdFI",
            ],
          },
          {
            name: "Hip Immobility",
            description:
              "Immobile hips are a potential cause of hip and lower back pain, as well as knee pain.",
            videos: [
              "https://www.youtube.com/embed/tASa_2DB_ms",
              "https://www.youtube.com/embed/h4cndex_rBM",
            ],
          },
        ],
      },
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
