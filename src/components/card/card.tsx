import React from "react";
import { Link } from "react-router-dom";
import ProductObject from "../../libs/ProductObject";
import CardDetails from "./card-details";
import "./card.css";

interface Props {
  product: ProductObject;
  cardWidthClass?: string;
}

class Card extends React.Component<Props> {
  render() {
    const { product, cardWidthClass } = this.props;
    return (
      <div className={cardWidthClass ? cardWidthClass : "col-50"}>
        <div className="p-1 ">
          <Link to={`/p/${product._id}`}>
            <div className="card">
              <div className="card-image">
                <div className="card-image-container">
                  <img src={product.images[0]} alt="" />
                </div>
              </div>
              <div className="py-1 px-2">
                <CardDetails product={product} />
              </div>
              <button type="button" className="card-button">
                Beli
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
