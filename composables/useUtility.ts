export const useUtility = () => {
  const capitalizer = (title: string) => {
    return `${title.replace(/(\b[a-z](?!\s))/g, (x) => x.toUpperCase())}`;
  };

  return { capitalizer };
};
