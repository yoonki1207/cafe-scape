import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import ImageCanvas from "../canvas/ImageCanvas";
import "./PhotoComponent.scss";

const PhotoComponent: React.FC<any> = ({ imgData }) => {
  const { url, title, desc } = imgData;
  return (
    <div className="photoComponentContainer">
      <ImageCanvas canvasWidth={900} canvasHeight={600} url={url} />
    </div>
  );
};

export default PhotoComponent;
