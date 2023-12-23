import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Emoji = ({ className, children }: Props) => {
  return (
    <span
      className={className}
      style={{ fontWeight: 400, fontStyle: "normal" }}
    >
      {children}
    </span>
  );
};
