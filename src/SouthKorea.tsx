import React from "react";
import southkorea from "./southKoreaSvg";
// import "./App.css";

const SouthKorea: React.FC<any> = ({onMouseMove}) => {

  return (
    <svg
      width="600px"
      height="800px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      onClick={(e: any)=>{console.log(e.target.id)}}
      onMouseMove={onMouseMove}
    >
      {southkorea}
    </svg>
  );
};

export default SouthKorea;
