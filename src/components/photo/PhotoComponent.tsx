import classNames from "classnames";
import React from "react";
import "./PhotoComponent.scss";

const PhotoComponent: React.FC<any> = ({ bgUrl, title, desc }) => {
  return (
    <div className="photoComponentContainer">
      <div
        className={classNames("containerStart")}
        style={{
          background: `url('${bgUrl}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-container">
          <h1>{title}</h1>
          <div>{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoComponent;
