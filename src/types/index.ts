export interface routerType {
  index?: boolean;
  title: string;
  path: string;
  element: any;
}

export type TPoemStatus = "Private" | "Public" | "PublicOnDetail";
export type TPoemType = "Post" | "Paper" | "Page";

export type TPoem = {
  id: string;

  date: { start_date: string };
  type: TPoemType[];
  slug: string;
  contents?: string[];
  category?: string[];
  poem?: string[];
  author?: {
    id: string;
    name: string;
    profile_photo?: string;
  }[];
  title: string;
  status: TPoemStatus[];
  createdTime: string;
  fullWidth: boolean;
  thumbnail?: string;
  isCover?: boolean;
};

export type PoemDetail = TPoem;

export type TPoems = TPoem[];

export type TContents = {
  [contentName: string]: number;
};
export type TCategories = {
  [category: string]: number;
};

export type ThemeType = "dark" | "light";
