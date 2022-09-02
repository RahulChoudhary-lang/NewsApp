import React from "react";
import Loading from "./1488.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={Loading} alt="loading" />
    </div>
  );
};

export default Spinner;
