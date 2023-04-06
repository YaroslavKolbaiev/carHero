import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const { params } = event.context;

  const selectedCar = prisma.car.findUnique({
    where: {
      id: +params!.id,
    },
  });

  return selectedCar;
});
