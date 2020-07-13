import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../objects/Product";
import CardDetails from "./card-details";
import ImageSquare from "../image/image-square";
import ProductButton from "../product-button/product-button";
import "./card.css";
import { Skeleton } from "../skeleton/skeleton";
import { SkeletonText } from "./../skeleton/skeleton";

interface Props {
  product: Product;
  cardWidthClass?: string;
}

const Card: React.FC<Props> = ({ product, cardWidthClass }) => {
  const [loading, setLoading] = useState(true);

  const imageLoader = new Image();
  imageLoader.src = product.images[0];
  imageLoader.onload = () => {
    setLoading(false);
  };

  return (
    <div className={cardWidthClass ? cardWidthClass : "col-50"}>
      <div className="p-1 ">
        <div className="card">
          {loading ? (
            <>
              <div className="card-image-skeleton">
                <Skeleton />
              </div>
              <div className="card-content-skeleton">
                <SkeletonText />
                <SkeletonText />
                <SkeletonText />
              </div>
              <div className="card-button-skeleton">
                <Skeleton />
              </div>
            </>
          ) : (
            <>
              <Link to={`/products/${product._id}`}>
                <ImageSquare imageUrl={product.images[0]} />
                <div className="p-1">
                  <CardDetails product={product} />
                </div>
              </Link>
              <div className="p-1">
                <ProductButton product={product} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
