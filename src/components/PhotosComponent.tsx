import classNames from "classnames";
import { useEffect, useState } from "react";
import Button from "./button/Button";
import "./PhotosComponent.scss";
import Background from "../img/KakaoTalk_20220811_162903983_03.jpg"; // config.d.ts는 자동생성된 파일이라 착각해서 무시됨,. images.d.ts로 생성

const PhotosCompoenent = () => {
  const [starting, setStarting] = useState(false);
  const [bgUrl, setBgUrl] = useState(Background);
  const [classState, setClassState] = useState({
    start: false,
  });

  useEffect(() => {
    setStarting(true);
    setClassState({ ...classState, start: true });
  }, []);
  // url 어케바꿈
  const onClickPrev = () => {};
  const onClickNext = () => {};
  return (
    <div className={classNames(classState, "photosapp")}>
      <Button value="<" onClick={onClickPrev} />
      <div
        className={classNames(classState, "container")}
        style={{
          background: `url('${Background}')`,
          backgroundSize: "contain",
        }}
      ></div>
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
