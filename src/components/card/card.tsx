import React from "react";
import ProductObject from "../../libs/ProductObject";
import ProductDetails from "../product/product-details";
import "./card.css";
import { Link } from "react-router-dom";

interface Props {
  product: ProductObject;
}

class Card extends React.Component<Props> {
  render() {
    const { product } = this.props;
    return (
      <Link to={`/p/${product._id}`} className="card">
        <img src={product.images[0]} className="card-image" alt="" />
        <div className="card-details">
          <ProductDetails product={product} />
        </div>
        <button type="button" className="card-button">
          Beli
        </button>
      </Link>
    );
  }
}

export default Card;
