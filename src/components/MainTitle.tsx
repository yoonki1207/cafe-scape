import React from "react";

const MainTitle: React.FC<{title: string}> = ({title}) => {

    return(
        <div className="title">
            {title}
        </div>
    );
}

export default MainTitle;