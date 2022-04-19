import React from "react";
import pic from "../images/location-icon.png";

const IntrodutionComponent = () => {
  return (
    <>
      <div className="intro-content">
        <div className="logo-img">
          <img src={pic} alt="location-logo" className="location-logo-img" />
        </div>
        <div className="intro-head">INTRODUCTION CONTENT</div>
        <div className="button">BUTTON</div>
      </div>
    </>
  );
};

export default IntrodutionComponent;
