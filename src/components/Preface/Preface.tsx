import React from "react";
import "./Preface.scss";

interface PrefaceProps {
  preface: {
    title: string;
    intro: string[];
    acknowledgment: string[];
    copyright: string;
  };
}

const Preface = ({ preface }: PrefaceProps) => {
  return (
    <>
      <div className='preface-container'>
        <div className='preface-text'>
          <div className='preface-title'>{preface.title}</div>
          {preface.intro.map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
          {/* <div className='poem-author'>{author}</div> */}
          {preface.acknowledgment.map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
          <div className='preface-copyright'>{preface.copyright}</div>
        </div>
      </div>
    </>
  );
};

export default Preface;
