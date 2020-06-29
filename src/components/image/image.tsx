import React from "react";
import "./image.css";

interface Props {
  imageUrl: string;
  imageClassName?: string;
}

class Image extends React.Component<Props> {
  render() {
    const { imageClassName, imageUrl } = this.props;
    return (
      <div className={imageClassName ? imageClassName : "image"}>
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Image;
