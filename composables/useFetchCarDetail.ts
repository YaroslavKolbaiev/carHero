export const useFetchCarDetail = async (id: string | string[]) => {
  const { data }: any = await useFetch(`/api/car/${id}`);

  return { car: data };
};
