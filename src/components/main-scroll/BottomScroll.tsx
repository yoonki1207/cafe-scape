import { UnsplashResultType } from "../../types/UnsplashTypes";
import "./BottomScroll.scss";

type ImgDataType = {
  url: string;
};

const BottomScroll: React.FC<{ datas: UnsplashResultType[] | null }> = ({
  datas,
}) => {
  return (
    <div className="scrollContainer">
      {datas?.map((data) => (
        <div className="imageItem" key={data.urls.small}>
          <img src={data.urls.thumb} alt="" />
        </div>
      ))}
    </div>
  );
};

export default BottomScroll;
