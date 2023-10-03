import React from "react";
import "./Poem.scss";

interface PoemProps {
  author: string;
  title: string;
  poem: string[];
}

const Poem = ({ author, title, poem }: PoemProps) => {
  return (
    <div className='poem-container'>
      <div className='poem-text'>
        <div className='poem-title'>{title}</div>
        <div className='poem-author'>{author}</div>
        <>
          {poem.map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </>
      </div>
    </div>
  );
};

export default Poem;
