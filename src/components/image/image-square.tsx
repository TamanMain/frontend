import React from "react";
import Image from "./image";

interface Props {
  imageUrl: string;
}

class ImageSquare extends React.Component<Props> {
  render() {
    return (
      <Image imageUrl={this.props.imageUrl} imageClassName="image-square" />
    );
  }
}

export default ImageSquare;
