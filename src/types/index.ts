// import { NextPage } from "next";
// import { AppProps } from "next/app";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { ExtendedRecordMap } from "notion-types";
import { ReactElement, ReactNode } from "react";

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

export type PostDetail = TPoem;

export type TPoems = TPoem[];

export type TContents = {
  [contentName: string]: number;
};
export type TCategories = {
  [category: string]: number;
};

export type ThemeType = "dark" | "light";
