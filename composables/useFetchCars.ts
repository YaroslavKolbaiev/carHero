export const useFetchCars = async (city: string, filters: any) => {
  const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
    params: { ...filters },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to load cars",
    });
  }
  return { cars: data, refresh };
};
