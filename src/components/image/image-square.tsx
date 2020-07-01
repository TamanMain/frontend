import React from "react";
import Image from "./image";

interface Props {
  imageUrl: string;
}

const ImageSquare: React.FC<Props> = ({ imageUrl }) => {
  return <Image imageUrl={imageUrl} imageClassName="image-square" />;
};

export default ImageSquare;
