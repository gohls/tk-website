import React from "react";
import "./Poem.scss";

interface PoemProps {
  title: string;
  poem: string[];
}

const Poem = ({ title, poem }: PoemProps) => {
  return (
    <div className='poem-container'>
      <div className='poem-text'>
        <div className='poem-title'>{title}</div>
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
