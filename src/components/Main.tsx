import React, { useEffect, useState } from "react";
import "../App.scss";
import MainTitle from "./MainTitle";
import SouthKorea from "../SouthKorea";
import areaNames from "./MapNames";
import { Route, Routes } from "react-router-dom";
import PhotosCompoenent from "./PhotosComponent";

function Main() {
  const [hover, setHover] = useState<string>("");

  const onMouseMove = (e: any) => {
      console.log()
      try{
          if(e.target.id === '') {
              setHover('')
          } else {
              const name = areaNames.filter(area => area.id === e.target.id)[0].title;
              setHover(name);
          }
      } catch (e: any) {

      }
  }

  useEffect(()=>{
    setHover('');
  }, []);

  return (
    <div className="app">
      <SouthKorea onMouseMove={onMouseMove}/>
      <PhotosCompoenent/>
      <MainTitle title={hover} />
    </div>
  );
}

export default Main;
