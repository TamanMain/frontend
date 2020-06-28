import React from "react";
import ProductObject from "../../libs/ProductObject";
import "./card-details.css";

interface Props {
  product: ProductObject;
}

function formatToRupiah(price: number): string {
  return "Rp " + price.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1.");
}

class CardDetails extends React.Component<Props> {
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
      <div className="card-details">
        <p className="card-details-name">{name}</p>
        <p className="card-details-quantity">{`${quantity} ${unit}`}</p>
        {isDiscount ? (
          <div>
            <span className="card-details-price">{formatToRupiah(price)}</span>
            <span className="card-details-discount">{`${discountPercent}%`}</span>
            <p className="card-details-discount-price">
              {formatToRupiah(discountPrice ? discountPrice : price)}
            </p>
          </div>
        ) : (
          <p className="card-details-discount-price">{formatToRupiah(price)}</p>
        )}
      </div>
    );
  }
}

export default CardDetails;
