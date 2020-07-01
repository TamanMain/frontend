import React from "react";
import "./image.css";

interface Props {
  imageUrl: string;
  imageClassName?: string;
}

const Image: React.FC<Props> = ({ imageUrl, imageClassName }) => {
  return (
    <div className={imageClassName ? imageClassName : "image"}>
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Image;
