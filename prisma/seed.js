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
      front: false,
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

const anklesAndHeelsRegion = await prisma.region.create({
  data: {
    name: "Ankles and Heels",
    front: false,
    Diagnostic: {},
  },
});

const calvesRegion = await prisma.region.create({
  data: {
    name: "Calves",
    front: false,
    Diagnostic: {},
  },
});

const hamstringsRegion = await prisma.region.create({
  data: {
    name: "Hamstrings",
    front: false,
    Diagnostic: {},
  },
});

const middleBackRegion = await prisma.region.create({
  data: {
    name: "Middle Back",
    front: false,
    Diagnostic: {},
  },
});

const upperBackRegion = await prisma.region.create({
  data: {
    name: "Upper Back",
    front: false,
    Diagnostic: {},
  },
});

const napeRegion = await prisma.region.create({
  data: {
    name: "Nape",
    front: false,
    Diagnostic: {},
  },
});

const tricepsRegion = await prisma.region.create({
  data: {
    name: "Triceps",
    front: false,
    Diagnostic: {},
  },
});

const forearmRegion = await prisma.region.create({
  data: {
    name: "Forearm",
    front: false,
    Diagnostic: {},
  },
});

const handRegion = await prisma.region.create({
  data: {
    name: "Hand",
    front: false,
    Diagnostic: {},
  },
});

const trapeziusRegion = await prisma.region.create({
  data: {
    name: "Trapezius",
    front: false,
    Diagnostic: {},
  },
});

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((error) => {
    throw error;
  });
