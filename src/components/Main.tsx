import React, { useEffect, useState } from "react";
import "../App.scss";
import MainTitle from "./MainTitle";
import SouthKorea from "../SouthKorea";
import areaNames from "./MapNames";
import { Route, Routes } from "react-router-dom";
import PhotosCompoenent from "./PhotosComponent";

function Main() {
  const [showMap, setShowMap] = useState<boolean>(true);
  const onHide = () => {
    setShowMap(false);
  };
  return <div className="app">{showMap && <SouthKorea onHide={onHide} />}</div>;
}

export default Main;
