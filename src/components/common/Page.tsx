import React from "react";
import "./Page.scss";

type PageProps = {
  children?: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return <div className='page-container'>{children}</div>;
};

export default Page;
