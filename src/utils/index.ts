const formatDate = (date: string | number | Date) => {
  const d = new Date(date);
  // TODO: make option a param to pass in
  const res = d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  });
  return res;
};

export { formatDate };
