import React, { useEffect, useState } from "react";
import "../App.scss";
import SouthKorea from "../SouthKorea";
import { Route, Routes, useNavigate } from "react-router-dom";
import PhotosCompoenent from "./PhotosComponent";

function Main() {
  const navigate = useNavigate();
  const onHide = (area_name: string) => {
    // 애니메이션 끝나고 바로 호출되는 함수임 startState, endState, onState 구분해야함.
    navigate(`/photos/${area_name}`);
  };
  return (
    <div className="app">
      <SouthKorea onHide={onHide} />
    </div>
  );
}

export default Main;
