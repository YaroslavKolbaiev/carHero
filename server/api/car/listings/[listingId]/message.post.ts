import { PrismaClient } from "@prisma/client";
import Joi from "joi";

const prisma = new PrismaClient();

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
  }),
  phone: Joi.string().required(),
  name: Joi.string().required(),
  message: Joi.string().min(20).required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { params } = event.context;
  const { authorization } = getHeaders(event);

  if (!authorization) {
    throw createError({
      statusCode: 500,
      statusMessage: "Not authorized",
    });
  }

  const { error } = schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 422,
      statusMessage: error.message,
    });
  }

  const { message, email, phone, name } = body;

  return prisma.message.create({
    data: {
      message,
      email,
      phone,
      name,
      carId: +params!.listingId,
    },
  });
});
