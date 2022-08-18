import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { UnsplashResultType } from "../../types/UnsplashTypes";
import ImageCanvas from "../canvas/ImageCanvas";
import "./PhotoComponent.scss";

const PhotoComponent: React.FC<{ imgData: UnsplashResultType }> = ({
  imgData,
}) => {
  const { urls } = imgData;
  return (
    <div className="photoComponentContainer">
      <ImageCanvas canvasWidth={900} canvasHeight={600} urls={urls} />
    </div>
  );
};

export default PhotoComponent;
