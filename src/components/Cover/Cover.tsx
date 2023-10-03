import React from "react";
import "./Cover.scss";
import cover from "../../cover.png";

const Cover = () => {
  return (
    <div className='cover-container'>
      <img src={cover} className='cover' alt='logo' />
    </div>
  );
};

export default Cover;
