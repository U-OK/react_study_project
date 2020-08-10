import React from "react";

const ImagePreview = ({
  src,
  alt = "Картинка",
  width = "200",
  height = "200",
}) => {
  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  return <img src={src} alt={alt} width={width} height={height} />;
};

export default ImagePreview;
