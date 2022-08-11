import classNames from "classnames";
import { useEffect, useState } from "react";
import "./PhotosComponent.scss";

const PhotosCompoenent = () => {
  const [starting, setStarting] = useState(false);
  const [classState, setClassState] = useState({
    photosapp: true,
    start: false,
  });

  useEffect(() => {
    setStarting(true);
    setClassState({ ...classState, start: true });
  }, []);
  return <div className={classNames(classState)}></div>;
};

export default PhotosCompoenent;

/*

상태
에니메이션 시작 전 null
에니메이션 시작 start
에니메이션 시작 중 starting
에니메이션 시작 종료 end
 */
