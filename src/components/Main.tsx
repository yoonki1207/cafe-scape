import React, { useEffect, useState } from "react";
import "../App.scss";
import SouthKorea from "../SouthKorea";
import { Route, Routes, useNavigate } from "react-router-dom";
import PhotosCompoenent from "./PhotosComponent";

function Main() {
  const [showMap, setShowMap] = useState<boolean>(true);
  const [showPhotos, setShowPhotos] = useState<boolean>(false);
  const [areaName, setAreaName] = useState<string>("jeju");
  const navigate = useNavigate();
  const onHide = () => {
    // 애니메이션 끝나고 바로 호출되는 함수임 startState, endState, onState 구분해야함.
    setShowMap(false);
    setShowPhotos(true);
    setTimeout(() => {
      navigate(`/photos/${areaName}`);
    }, 300);
  };
  return (
    <div className="app">
      <SouthKorea onHide={onHide} setAreaName={setAreaName} />
    </div>
  );
}

export default Main;
