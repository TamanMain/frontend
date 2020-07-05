import React from "react";
import { Link } from "react-router-dom";
import Product from "../../objects/Product";
import CardDetails from "./card-details";
import ImageSquare from "../image/image-square";
import ProductButton from "../product-button/product-button";
import "./card.css";

interface Props {
  product: Product;
  cardWidthClass?: string;
}

const Card: React.FC<Props> = ({ product, cardWidthClass }) => {
  return (
    <div className={cardWidthClass ? cardWidthClass : "col-50"}>
      <div className="p-1 ">
        <div className="card">
          <Link to={`/p/${product._id}`}>
            <ImageSquare imageUrl={product.images[0]} />
            <div className="p-1">
              <CardDetails product={product} />
            </div>
          </Link>
          <div className="p-1">
            <ProductButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
