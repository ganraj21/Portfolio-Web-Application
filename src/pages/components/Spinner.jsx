import React from "react";
import "./Spinner.css";
function Spinner(props) {
  return (
    <>
      <div className="spinner" style={{ display: props.style }}></div>
    </>
  );
}

export default Spinner;
