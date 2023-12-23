import React from "react";
import PoemHeader from "./PoemHeader";
import PoemFooter from "./PoemFooter";
import styled from "@emotion/styled";
import { poems } from "src/text/poems";
import PoemBody from "./PoemBody";
import Paper from "src/components/Paper";

type Props = {
  slug: string;
};

const PoemDetail: React.FC<Props> = ({ slug }) => {
  const data = poems;
  const idx = data.findIndex((post) => post.slug === slug);
  if (!idx) return null;

  return (
    <Paper>
      <PoemHeader data={data[idx]} />
      <PoemBody data={data[idx]} />
      <>
        <PoemFooter />
      </>
    </Paper>
  );
};

export default PoemDetail;
