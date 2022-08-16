import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Button from "./button/Button";
import "./PhotosComponent.scss";
// config.d.ts는 자동생성된 파일이라 착각해서 무시됨,. images.d.ts로 생성
import PhotoComponent from "./photo/PhotoComponent";
import BottomScroll from "./main-scroll/BottomScroll";
import { useKeyState } from "../hooks/useKeyState";

const IMG_DATAS = [
  {
    url: "/img/KakaoTalk_20220811_162903983_01.jpg",
    title: "TITLE",
    desc: "DESCRIPTION",
  },
  {
    url: "/img/KakaoTalk_20220811_162903983_02.jpg",
    title: "TITLE",
    desc: "DESCRIPTION",
  },
  {
    url: "/img/KakaoTalk_20220811_162903983_03.jpg",
    title: "TITLE",
    desc: "DESCRIPTION",
  },
  {
    url: "/img/KakaoTalk_20220811_162903983_04.jpg",
    title: "TITLE",
    desc: "DESCRIPTION",
  },
  {
    url: "/img/KakaoTalk_20220811_162903983_05.jpg",
    title: "TITLE",
    desc: "DESCRIPTION",
  },
  {
    url: "/img/KakaoTalk_20220811_162903983_06.jpg",
    title: "TITLE",
    desc: "DESCRIPTION",
  },
  {
    url: "/img/KakaoTalk_20220811_162903983_07.jpg",
    title: "TITLE",
    desc: "DESCRIPTION",
  },
  {
    url: "/img/Img_sample_00.jpeg",
    title: "England",
    desc: "Untitlted, England",
  },
  {
    url: "/img/Img_sample_01.jpeg",
    title: "France",
    desc: "Paris, France",
  },
];

const PhotosCompoenent = () => {
  useKeyState((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") onClickPrev();
    if (e.key === "ArrowRight" || e.key === "ArrowDown") onClickNext();
  });
  const index = useRef(0);
  const [currentImg, setCurrentImg] = useState({
    ...IMG_DATAS[0],
  });
  const onClickPrev = () => {
    index.current--;
    if (index.current < 0) index.current = IMG_DATAS.length - 1;
    setCurrentImg({ ...IMG_DATAS[index.current] });
  };

  const onClickNext = () => {
    index.current++;
    if (index.current >= IMG_DATAS.length) index.current = 0;
    setCurrentImg({ ...IMG_DATAS[index.current] });
  };

  useEffect(() => {
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
            <PhotoComponent imgData={currentImg} />
            <a href="" className="close" />
          </div>
        </div>
        <Button onClick={onClickNext} />
      </div>
      <div className="scrollArea">
        <BottomScroll datas={IMG_DATAS} />
      </div>
    </div>
  );
};

// 스크롤 에리아의 사진들은 사진 크기별로 렌더링하는건 어떨까 싶음. 높이는 고정, 그에따른 가로비율을 조정해서 다양한 items를 배치.
export default PhotosCompoenent;

/*

상태
에니메이션 시작 전 null
에니메이션 시작 start
에니메이션 시작 중 starting
에니메이션 시작 종료 end

 */
