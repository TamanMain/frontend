import React from "react";
import ProductObject from "../../libs/ProductObject";
import CardDetails from "./card-details";

interface Props {
  product: ProductObject;
}

const CardDetailsFluid: React.FC<Props> = ({ product }) => {
  return <CardDetails product={product} className="card-details-fluid" />;
};

export default CardDetailsFluid;
