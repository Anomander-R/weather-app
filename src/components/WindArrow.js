import React from "react";
import arrow from "../assets/images/wind_arrow.png";

const WindArrow = ({ windDirection }) => {
  return (
    <div style={{ marginTop: `7px` }}>
      <img
        src={arrow}
        alt="wind direction arrow"
        width={24}
        style={{ transform: `rotate(${windDirection}deg)` }}
      />
    </div>
  );
};

export default WindArrow;
