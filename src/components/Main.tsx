import React, { useEffect, useState } from "react";
import "../App.scss";
import MainTitle from "./MainTitle";
import SouthKorea from "../SouthKorea";
import areaNames from "./MapNames";
import { Route, Routes } from "react-router-dom";
import PhotosCompoenent from "./PhotosComponent";

function Main() {
  const [showMap, setShowMap] = useState<boolean>(true);
  const [showPhotos, setShowPhotos] = useState<boolean>(false);
  const [areaName, setAreaName] = useState<string>("jeju");
  const onHide = () => {
    // 애니메이션 끝나고 바로 호출되는 함수임 startState, endState, onState 구분해야함.
    setShowMap(false);
    setShowPhotos(true);
  };
  return (
    <div className="app">
      {showMap && <SouthKorea onHide={onHide} setAreaName={setAreaName} />}
      {showPhotos && <PhotosCompoenent areaName={areaName} />}
    </div>
  );
}

export default Main;
