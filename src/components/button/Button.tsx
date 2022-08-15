import React from "react";
import "./Button.scss";

const Button: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      {/* {value} */}
    </button>
  );
};

export default Button;
