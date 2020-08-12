import React from "react";

const ImagePreview = ({
  src,
  alt = "Картинка",
  width = "200",
  height = "200",
}) => {
  const imgSrc = src ? src : `https://via.placeholder.com/${width}x${height}`;

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      style={{ borderRadius: "50%" }}
    />
  );
};

export default ImagePreview;
