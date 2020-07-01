import React from "react";
import Image from "./image";

interface Props {
  imageUrl: string;
}

const ImageCircle: React.FC<Props> = ({ imageUrl }) => {
  return <Image imageUrl={imageUrl} imageClassName="image-circle" />;
};

export default ImageCircle;
