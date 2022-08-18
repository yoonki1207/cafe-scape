import React from "react";
import { UnsplashResultType } from "../../types/UnsplashTypes";
import "./BottomScroll.scss";

const BottomScroll: React.FC<{
  datas: UnsplashResultType[] | null;
  onClick: (index: number) => void;
}> = ({ datas, onClick }) => {
  return (
    <div className="scrollContainer">
      {datas?.map((data, index) => (
        <div className="imageItem" key={data.urls.small}>
          <img src={data.urls.thumb} alt="" onClick={() => onClick(index)} />
        </div>
      ))}
    </div>
  );
};

export default BottomScroll;
