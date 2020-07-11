import React from "react";
import Product from "../../objects/Product";
import "./card-details.css";
import * as currency from "../../libs/currency";

interface Props {
  product: Product;
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
            {currency.formatToRupiah(product.actualPrice)}
          </span>
          <span className="card-details-discount">{`${product.discount}%`}</span>
          <p className="card-details-discount-price">
            {currency.formatToRupiah(product.price)}
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
