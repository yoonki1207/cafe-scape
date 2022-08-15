import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Button from "./button/Button";
import "./PhotosComponent.scss";
// config.d.ts는 자동생성된 파일이라 착각해서 무시됨,. images.d.ts로 생성
import PhotoComponent from "./photo/PhotoComponent";

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
  const index = useRef(0);
  const [src, setSrc] = useState(IMG_DATAS[0].url);
  const onClickPrev = () => {
    index.current--;
    if (index.current < 0) index.current = IMG_DATAS.length - 1;
    setSrc(IMG_DATAS[index.current].url);
  };

  const onClickNext = () => {
    index.current++;
    if (index.current >= IMG_DATAS.length) index.current = 0;
    setSrc(IMG_DATAS[index.current].url);
  };

  useEffect(() => {
    console.log(src);
  }, [index, src]);
  return (
    <div className="photosComponentContainer">
      <div className="mainArea">
        <Button onClick={onClickPrev} />
        <div className="photoArea">
          <div className="photoBox">
            {/* <div className="photo"></div> */}
            <PhotoComponent
              bgUrl={IMG_DATAS[index.current].url}
              title={IMG_DATAS[0].title}
              desc={IMG_DATAS[0].desc}
            />
          </div>
        </div>
        <Button onClick={onClickNext} />
      </div>
      <div className="scrollArea"></div>
    </div>
  );
};

export default PhotosCompoenent;

/*

상태
에니메이션 시작 전 null
에니메이션 시작 start
에니메이션 시작 중 starting
에니메이션 시작 종료 end

 */
