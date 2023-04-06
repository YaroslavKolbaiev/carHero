import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { params } = event.context;

  return await prisma.car.delete({
    where: {
      id: +params!.carId,
    },
  });
});
