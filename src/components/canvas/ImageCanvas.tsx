import { RefObject, useEffect, useRef } from "react";
import { useCanvas } from "../../hooks/useCanvas";

type ImageCanvasProps = {
  canvasWidth: number;
  canvasHeight: number;
  url: string;
};

const ImageCanvas: React.FC<ImageCanvasProps> = ({
  canvasWidth,
  canvasHeight,
  url,
}) => {
  const fillBackground = (ctx: CanvasRenderingContext2D) => {
    const img = new Image();
    // img.src = "/img/KakaoTalk_20220811_162903983_07.jpg";
    img.src = url;

    img.onload = function () {
      const height = img.height;
      const width = img.width;

      const X =
        height * 3 >= width * 2 ? (canvasHeight * width) / height : canvasWidth;
      const Y =
        height * 3 >= width * 2 ? canvasHeight : (canvasWidth * height) / width;
      ctx.filter = "blur(10px)";
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

      ctx.globalCompositeOperation = "source-atop";
      ctx.filter = "blur(0px)";
      ctx.drawImage(img, (canvasWidth - X) / 2, (canvasHeight - Y) / 2, X, Y);
    };
  };

  const canvasRef = useCanvas(canvasWidth, canvasHeight, fillBackground);

  return <canvas ref={canvasRef} />;
};

export default ImageCanvas;
