import React from "react";
import "./Preface.scss";
import { Typography } from "@mui/material";

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
      <div className="preface-container">
        <div className="preface-title">
          <Typography variant="h6" style={{ lineHeight: 3 }}>
            {preface.header}
          </Typography>
        </div>
        <br />
        <br />
        {preface.intro.map((line, index) => {
          return (
            <Typography variant="h6" key={index} style={{ lineHeight: 3 }}>
              {line}
            </Typography>
          );
        })}
        {preface.acknowledgment.map((line, index) => {
          return (
            <Typography variant="h6" key={index} style={{ lineHeight: 3 }}>
              {line}
            </Typography>
          );
        })}
        <br />
        <br />
        <div className="preface-copyright">
          <Typography
            variant="h6"
            style={{
              lineHeight: 3,
              alignItems: "bottom",
            }}
          >
            {preface.copyright}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Preface;
