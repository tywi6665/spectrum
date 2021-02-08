import React from "react";

const Spectrum = () => {
  return (
    <div className="spectrum">
      <svg
        style={{
          height: "100%",
          width: "100%",
          marginRight: "0px",
          marginLeft: "0px",
          backgroundColor: "white",
        }}
      >
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default Spectrum;
