import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { params } = event.context;
  return prisma.message.findMany({
    where: {
      carId: +params!.listingId,
    },
  });
});
