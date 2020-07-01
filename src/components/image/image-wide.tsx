import React from "react";
import Image from "./image";

interface Props {
  imageUrl: string;
}

const ImageWide: React.FC<Props> = ({ imageUrl }) => {
  return <Image imageUrl={imageUrl} imageClassName="image-wide" />;
};

export default ImageWide;
