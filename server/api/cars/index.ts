import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const cars = await prisma.car.findMany({
    take: -12,
    select: { id: true, name: true, image: true, city: true },
  });
  if (!cars.length) {
    return null;
  }
  return cars;
});
