import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Filters {
  city: string;
  make?: string;
  price: {
    gte?: number;
    lte?: number;
  };
}

export default defineEventHandler(async (event) => {
  const { params } = event.context;
  const { make, minPrice, maxPrice }: any = getQuery(event);

  const filters: Filters = {
    city: params!.city.toLowerCase(),
    price: {},
  };

  if (make) {
    filters.make = make;
  }

  if (minPrice) {
    filters.price.gte = +minPrice;
  }

  if (maxPrice) {
    filters.price.lte = +maxPrice;
  }

  return await prisma.car.findMany({
    where: filters,
  });
});
