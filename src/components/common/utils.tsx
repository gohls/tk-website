export const poemTitleEncoder = (title: string) => {
  return title.replace(/[^A-Za-z0-9]/g, "-");
};
