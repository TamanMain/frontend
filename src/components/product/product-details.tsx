import React from "react";
import "./product-details.css";
import ProductObject from "../../libs/ProductObject";

interface Props {
  product: ProductObject;
}

function formatToRupiah(price: number): string {
  return "Rp " + price.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1.");
}

class ProductDetails extends React.Component<Props> {
  render() {
    const {
      name,
      quantity,
      unit,
      price,
      isDiscount,
      discountPercent,
      discountPrice,
    } = this.props.product;

    return (
      <div className="product-details">
        <p className="product-details-name">{name}</p>
        <p className="product-details-quantity">{`${quantity} ${unit}`}</p>
        {isDiscount ? (
          <div>
            <span className="product-details-price">
              {formatToRupiah(price)}
            </span>
            <span className="product-details-discount">{`${discountPercent}%`}</span>
            <p className="product-details-discount-price">
              {formatToRupiah(discountPrice ? discountPrice : price)}
            </p>
          </div>
        ) : (
          <p className="product-details-discount-price">
            {formatToRupiah(price)}
          </p>
        )}
      </div>
    );
  }
}

export default ProductDetails;
