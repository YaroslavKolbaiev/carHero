import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const { params } = event.context;

  return prisma.car.findMany({
    where: {
      author: params?.userId,
    },
    select: {
      image: true,
      id: true,
      name: true,
      price: true,
    },
  });
});
