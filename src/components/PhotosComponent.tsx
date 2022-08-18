import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Button from "./button/Button";
import "./PhotosComponent.scss";
// config.d.ts는 자동생성된 파일이라 착각해서 무시됨,. images.d.ts로 생성
import PhotoComponent from "./photo/PhotoComponent";
import BottomScroll from "./main-scroll/BottomScroll";
import { useKeyState } from "../hooks/useKeyState";
import UnsplashAPI from "../apis/UnsplashAPI";
import { UnsplashResultType } from "../types/UnsplashTypes";
import { useParams } from "react-router-dom";

const PhotosComponent: React.FC = () => {
  const { areaName } = useParams();
  useKeyState((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") onClickPrev();
    if (e.key === "ArrowRight" || e.key === "ArrowDown") onClickNext();
  });
  const index = useRef(0);
  const [currentImg, setCurrentImg] = useState<UnsplashResultType | null>(null);
  const [imgData, setImgData] = useState<UnsplashResultType[] | null>(null);
  const onClickPrev = () => {
    if (imgData) {
      index.current--;
      if (index.current < 0) index.current = imgData.length - 1;
      setCurrentImg({ ...imgData[index.current] });
    }
  };

  const onClickNext = () => {
    if (imgData) {
      index.current++;
      if (index.current >= imgData.length) index.current = 0;
      imgData && setCurrentImg({ ...imgData[index.current] });
    }
  };

  const onClickThum = (index: number) => {
    if (imgData && index >= 0 && index < imgData.length)
      setCurrentImg({ ...imgData[index] });
  };

  useEffect(() => {
    console.log(`Area name is: ${areaName}`);
    async function getImgs() {
      console.log("GET NEW IMAGES FOR", areaName);
      const results = await UnsplashAPI(areaName || "Korea");
      setImgData(results);
      setCurrentImg(results[0]);
    }
    getImgs();
    function transformScroll(event: any) {
      if (!event.deltaY) {
        return;
      }
      const element = document.getElementsByClassName("scrollArea")[0];
      element.scrollLeft += event.deltaY + event.deltaX;
    }
    window.addEventListener("wheel", transformScroll);
  }, []);
  return (
    <div className="photosComponentContainer">
      <div className="mainArea">
        <Button onClick={onClickPrev} />
        <div className="photoArea">
          <div className="photoBox">
            {/* <div className="photo"></div> */}
            {currentImg && <PhotoComponent imgData={currentImg} />}
            <a href="/" className="close" />
          </div>
        </div>
        <Button onClick={onClickNext} />
      </div>
      <div className="scrollArea">
        <BottomScroll datas={imgData} onClick={onClickThum} />
      </div>
    </div>
  );
};

// 스크롤 에리아의 사진들은 사진 크기별로 렌더링하는건 어떨까 싶음. 높이는 고정, 그에따른 가로비율을 조정해서 다양한 items를 배치.
export default PhotosComponent;

/*

상태
에니메이션 시작 전 null
에니메이션 시작 start
에니메이션 시작 중 starting
에니메이션 시작 종료 end

 */
