import React from "react";
import Image from "./image";

interface Props {
  imageUrl: string;
}

class ImageUltraWide extends React.Component<Props> {
  render() {
    return (
      <Image imageUrl={this.props.imageUrl} imageClassName="image-ultra-wide" />
    );
  }
}

export default ImageUltraWide;
