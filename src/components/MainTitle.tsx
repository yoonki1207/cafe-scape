import classnames from "classnames";
import React, { useEffect, useRef, useState } from "react";

const MainTitle: React.FC<{ title: string; startHide: boolean }> = ({
  title,
  startHide,
}) => {
  const [status, setStatus] = useState({
    title: true,
    hidden: false,
  });
  useEffect(() => {
    if (startHide) setStatus({ ...status, hidden: true });
  }, [startHide]);
  return <div className={classnames(status)}>{title}</div>;
};
// 상위 컴포넌트에서 관리하는게 맞음. 어떤 상태를 렌더링 할지를 결정해야함. 만약 hidden이라면 투명해지는 컴포넌트를 만드는게 맞음.
export default MainTitle;
