import React from "react";
import "./product-details.css";

interface Props {
  name: string;
  quantity: number;
  unit: string;
  price: number;
  isDiscount?: boolean;
  discount?: number;
  discountPrice?: number;
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
      discount,
      discountPrice,
    } = this.props;

    return (
      <div className="product-details">
        <p className="product-title">{name}</p>
        <p className="product-quantity">{`${quantity} ${unit}`}</p>
        {isDiscount ? (
          <div>
            <span className="product-price">{formatToRupiah(price)}</span>
            <span className="product-discount">{`${discount}%`}</span>
            <p className="product-discount-price">
              {formatToRupiah(discountPrice ? discountPrice : price)}
            </p>
          </div>
        ) : (
          <p className="product-discount-price">{formatToRupiah(price)}</p>
        )}
      </div>
    );
  }
}

export default ProductDetails;
