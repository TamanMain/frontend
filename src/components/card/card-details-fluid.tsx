import React from "react";
import Product from "../../objects/Product";
import CardDetails from "./card-details";

interface Props {
  product: Product;
}

const CardDetailsFluid: React.FC<Props> = ({ product }) => {
  return <CardDetails product={product} className="card-details-fluid" />;
};

export default CardDetailsFluid;
