const formatDate = (date: string | number | Date) => {
  const d = new Date(date);
  const res = d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  });
  return res;
};

export { formatDate };
