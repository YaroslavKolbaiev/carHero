import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  make: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number().min(1886).max(new Date().getFullYear()).required(),
  miles: Joi.number().required(),
  city: Joi.string().min(2).required(),
  seats: Joi.number().max(100).min(1).required(),
  features: Joi.array().items(Joi.string()).required(),
  description: Joi.string().min(10).required(),
  image: Joi.string().required(),
  author: Joi.string().required(),
  price: Joi.number().min(0),
  name: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { error, value } = schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  const car = await prisma.car.create({
    data: body,
  });

  return car;
});
