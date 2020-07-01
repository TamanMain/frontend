import React from "react";
import ProductObject from "../../libs/ProductObject";
import "./card-details.css";
import * as currency from "../../libs/currency";

interface Props {
  product: ProductObject;
  className?: string;
}

const CardDetails: React.FC<Props> = ({ product, className }) => {
  return (
    <div className={className ? className : "card-details"}>
      <p className="card-details-name">{product.name}</p>
      <p className="card-details-quantity">{`${product.quantity} ${product.unit}`}</p>
      {product.isDiscount ? (
        <div>
          <span className="card-details-price">
            {currency.formatToRupiah(product.price)}
          </span>
          <span className="card-details-discount">{`${product.discountPercent}%`}</span>
          <p className="card-details-discount-price">
            {currency.formatToRupiah(
              product.discountPrice ? product.discountPrice : product.price
            )}
          </p>
        </div>
      ) : (
        <p className="card-details-discount-price">
          {currency.formatToRupiah(product.price)}
        </p>
      )}
    </div>
  );
};

export default CardDetails;
