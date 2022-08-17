import { RefObject, useEffect, useRef } from "react";
import { useCanvas } from "../../hooks/useCanvas";
import { UnsplashUrls } from "../../types/UnsplashTypes";

type ImageCanvasProps = {
  canvasWidth: number;
  canvasHeight: number;
  urls: UnsplashUrls;
};

const ImageCanvas: React.FC<ImageCanvasProps> = ({
  canvasWidth,
  canvasHeight,
  urls,
}) => {
  const drawImage = (ctx: CanvasRenderingContext2D) => {
    const simg = new Image();
    const img = new Image();
    // img.src = "/img/KakaoTalk_20220811_162903983_07.jpg";
    img.src = urls.full;
    simg.src = urls.small;

    console.log('Image load start')
    simg.onload = function () {
      console.log('Small image loaded')
      const height = simg.height;
      const width = simg.width;

      const X =
        height * 3 >= width * 2 ? (canvasHeight * width) / height : canvasWidth;
      const Y =
        height * 3 >= width * 2 ? canvasHeight : (canvasWidth * height) / width;
      ctx.filter = "blur(10px)";
      ctx.drawImage(simg, 0, 0, canvasWidth, canvasHeight);

      ctx.globalCompositeOperation = "source-atop";
      ctx.filter = "blur(0px)";
      ctx.drawImage(simg, (canvasWidth - X) / 2, (canvasHeight - Y) / 2, X, Y);
      ctx.drawImage(img, (canvasWidth - X) / 2, (canvasHeight - Y) / 2, X, Y);
    }
    img.onload = function () {
      console.log('Full image loaded')
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

  const canvasRef = useCanvas(canvasWidth, canvasHeight, drawImage, [urls]);

  return <canvas ref={canvasRef} />;
};

export default ImageCanvas;
