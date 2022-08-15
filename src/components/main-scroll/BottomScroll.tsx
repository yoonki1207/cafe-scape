import "./BottomScroll.scss";

type ImgDataType = {
  url: string;
};

const BottomScroll: React.FC<{ datas: ImgDataType[] }> = ({ datas }) => {
  return (
    <div className="scrollContainer">
      {datas.map((data) => (
        <div className="imageItem" key={data.url}>
          <img src={data.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default BottomScroll;
