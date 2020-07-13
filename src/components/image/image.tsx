import React, { useState } from "react";
import "./image.css";
import Skeleton from "../skeleton/skeleton";

interface Props {
  imageUrl: string;
  imageClassName?: string;
}

const Image: React.FC<Props> = ({ imageUrl, imageClassName }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={imageClassName ? imageClassName : "image"}>
      <div className="image-container">
        <img
          src={imageUrl}
          alt=""
          className={loading ? "hide" : ""}
          onLoad={() => setLoading(false)}
        />
        {loading ? <Skeleton /> : null}
      </div>
    </div>
  );
};

export default Image;
