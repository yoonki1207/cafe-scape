import classNames from "classnames";
import React from "react";

const PhotoComponent: React.FC<any> = ({bgUrl}) => {

    return(<div
        className={classNames('containerStart')}
        style={{
          background: `url('${bgUrl}')`,
          backgroundSize: "contain"
        }}  
      ></div>);
}

export default PhotoComponent;