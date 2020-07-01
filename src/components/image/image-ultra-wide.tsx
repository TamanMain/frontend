import React from "react";
import Image from "./image";

interface Props {
  imageUrl: string;
}

const ImageUltraWide: React.FC<Props> = ({ imageUrl }) => {
  return <Image imageUrl={imageUrl} imageClassName="image-ultra-wide" />;
};

export default ImageUltraWide;
