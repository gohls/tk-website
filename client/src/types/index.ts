export interface routerType {
  index?: boolean;
  title: string;
  path: string;
  element: any;
  error?: any;
}

export type TPoem = {
  id: string;
  date: { start_date: string };
  slug: string;
  booklet?: string[];
  poem: string[];
  author: string;
  title: string;
  createdTime: string;
  fullWidth: boolean;
  thumbnail?: string;
};

export type PoemDetail = TPoem;

export type TPoems = TPoem[];

export type ThemeType = "dark" | "light";
