import React from "react";
import "./Button.scss";

const Button: React.FC<{ value: string; onClick: () => void }> = ({
  value,
  onClick,
}) => {
  return (
    <button type="submit" onClick={onClick}>
      {/* {value} */}
    </button>
  );
};

export default Button;
