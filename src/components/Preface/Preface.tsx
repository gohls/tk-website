import React from "react";
import "./Preface.scss";

interface PrefaceProps {
  preface: {
    header: string;
    intro: string[];
    acknowledgment: string[];
    copyright: string;
  };
}

const Preface = ({ preface }: PrefaceProps) => {
  return (
    <>
      <div className='preface-container'>
        <div className='preface-title'>{preface.header}</div>
        {preface.intro.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
        {preface.acknowledgment.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
        <div className='preface-copyright'>{preface.copyright}</div>
      </div>
    </>
  );
};

export default Preface;
