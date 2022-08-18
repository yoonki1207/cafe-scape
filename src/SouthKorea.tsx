import React, { useEffect, useState } from "react";
import "./SouthKorea.scss";
import classNames from "classnames";
import SouthKoreaSVG from "./southKoreaSvg";
import MainTitle from "./components/MainTitle";
import areaNames from "./components/MapNames";

const SouthKorea: React.FC<any> = ({ onHide }) => {
  const [hide, setHide] = useState<boolean>(false);
  const [hover, setHover] = useState<string>("");

  const onMouseMove = (e: any) => {
    console.log();
    try {
      if (e.target.id === "") {
        setHover("");
      } else {
        const name = areaNames.filter((area) => area.id === e.target.id)[0]
          .title;
        setHover(name);
      }
    } catch (e: any) {}
  };

  const onClick = (e: any) => {
    if (e.target.id) {
      setHide(true);
      const name = areaNames.filter((area) => area.id === e.target.id)[0].title;
      console.log(`Search for ${name}`);
      setTimeout(() => onHide(name), 300);
    }
  };

  useEffect(() => {
    setHover("");
    return () => console.log("South Korea Unmounted");
  }, []);
  return (
    <>
      <svg
        width="600px"
        height="800px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        onClick={onClick}
        onMouseMove={onMouseMove}
      >
        <SouthKoreaSVG hide={hide} />
      </svg>

      <MainTitle title={hover} startHide={hide} />
    </>
  );
};

export default SouthKorea;
