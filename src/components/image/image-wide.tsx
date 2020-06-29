import React from "react";
import Image from "./image";

interface Props {
  imageUrl: string;
}

class ImageWide extends React.Component<Props> {
  render() {
    return <Image imageUrl={this.props.imageUrl} imageClassName="image-wide" />;
  }
}

export default ImageWide;
