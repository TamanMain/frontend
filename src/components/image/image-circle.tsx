import React from "react";
import Image from "./image";

interface Props {
  imageUrl: string;
}

class ImageCircle extends React.Component<Props> {
  render() {
    return (
      <Image imageUrl={this.props.imageUrl} imageClassName="image-circle" />
    );
  }
}

export default ImageCircle;
