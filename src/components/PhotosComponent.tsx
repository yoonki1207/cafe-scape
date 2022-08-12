import classNames from "classnames";
import { useEffect, useState } from "react";
import Button from "./button/Button";
import "./PhotosComponent.scss";
import Background from "../img/KakaoTalk_20220811_162903983_03.jpg"; // config.d.ts는 자동생성된 파일이라 착각해서 무시됨,. images.d.ts로 생성
import Background2 from "../img/KakaoTalk_20220811_162903983_02.jpg";
import PhotoComponent from "./photo/PhotoComponent";

const PhotosCompoenent = () => {
  const [next, setNext] = useState(false);
  const [classState, setClassState] = useState({
    start: false,
  });

  useEffect(() => {
    setClassState({ ...classState, start: true});
  }, []);
  // url 어케바꿈
  const onClickPrev = () => {setNext(false)};
  const onClickNext = () => {setNext(true)};

  const temp = <div
  className={classNames('containerStart')}
  style={{
    background: `url('${Background2}')`,
    backgroundSize: "contain"
  }}
    ></div>;
  return (
    <div className={classNames(classState, "photosapp")}>
      <Button value="<" onClick={onClickPrev} />
      <div className="emptyContainer"></div>
      <PhotoComponent bgUrl={Background} />
      {next && temp}
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
