import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import ImageCanvas from "../canvas/ImageCanvas";
import "./PhotoComponent.scss";

const PhotoComponent: React.FC<any> = ({ bgUrl, title, desc }) => {
  return (
    <div className="photoComponentContainer">
      <ImageCanvas canvasWidth={900} canvasHeight={600} url={bgUrl} />
    </div>
  );
};

export default PhotoComponent;
