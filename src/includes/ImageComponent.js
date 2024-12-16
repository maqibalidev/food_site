import React, { useState } from "react";
import imagePlceholder from "../assets/images/image_placeholder.png";
import Skeleton from "react-loading-skeleton";
const ImageComponent = ({ src ,height,width,rounded=0}) => {
  const [iamge_src, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <>
      <img
        src={iamge_src}
        style={{ display: isLoaded ? "block" : "none" }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setImageSrc(imagePlceholder)}
      />

      {!isLoaded  && <Skeleton height={height} width={width} borderRadius={rounded} />}
    </>
  );
};

export default ImageComponent;
