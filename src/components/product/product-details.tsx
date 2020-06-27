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
      <div>
        <p className="product-name">{name}</p>
        <p className="product-quantity">{`${quantity} ${unit}`}</p>
        {isDiscount ? (
          <div>
            <span className="product-price">{formatToRupiah(price)}</span>
            <span className="product-discount">{`${discountPercent}%`}</span>
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
