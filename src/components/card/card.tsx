import React from "react";

import "./card.css";

interface Props {
  image: string;
  title: string;
  quantity: string;
  price: string;
}

class Card extends React.Component<Props> {
  render() {
    const { image, title, quantity, price } = this.props;
    return (
      <div className="card">
        <img src={image} className="card-image" alt="" />
        <p className="card-title">{title}</p>
        <p className="card-quantity">{quantity}</p>
        <p className="card-price">{price}</p>
        <button type="button" className="card-button">
          Beli
        </button>
      </div>
    );
  }
}

export default Card;
