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
  const [classState, setClassState] = useState({
    start: false,
  });
  const [loadedImgs, setLoadedImgs] = useState([IMG_DATAS[0]]);
  const currentIndex = useRef(1);

  useEffect(() => {
    setClassState({ ...classState, start: true });
  }, []);
  // url 어케바꿈
  const onClickPrev = () => {
    try {
      if (currentIndex.current - 1 <= 0) currentIndex.current = 0;
      else setLoadedImgs(loadedImgs.concat(IMG_DATAS[--currentIndex.current]));
    } catch (e) {}
  };
  const onClickNext = () => {
    try {
      if (currentIndex.current + 1 >= IMG_DATAS.length)
        currentIndex.current = IMG_DATAS.length - 1;
      else setLoadedImgs(loadedImgs.concat(IMG_DATAS[++currentIndex.current]));
    } catch (e) {}
  };

  useEffect(() => {}, [loadedImgs]);

  return (
    <div className={classNames(classState, "photosapp")}>
      <Button value="<" onClick={onClickPrev} />
      <div className="emptyContainer">
        {loadedImgs.map((data) => (
          <PhotoComponent
            key={data.url}
            bgUrl={data.url}
            title={data.title}
            desc={data.desc}
          />
        ))}
      </div>

      <Button value=">" onClick={onClickNext} />
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
