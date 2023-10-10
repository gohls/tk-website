import React from "react";
import "./Poem.scss";
import { Typography } from "@mui/material";
import Page from "../common/Page";

interface PoemProps {
  author: string;
  title: string;
  poem: string[];
  key: number;
}

const Poem = ({ author, title, poem, key }: PoemProps) => {
  return (
    <>
      <Page>
        <div className='poem-text'>
          <Typography variant='h4' align='center'>
            {title === "(no-title)" ? "" : title}
          </Typography>
          <Typography variant='h5' align='center'>
            {author}
          </Typography>
          {poem.map((line, index) => {
            return (
              <Typography paragraph key={index}>
                {line}
              </Typography>
            );
          })}
        </div>
      </Page>
    </>
  );
};

export default Poem;
