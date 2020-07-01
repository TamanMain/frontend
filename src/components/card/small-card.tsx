import React from "react";
import ProductObject from "../../libs/ProductObject";
import Card from "./card";
import "./small-card.css";

interface Props {
  product: ProductObject;
}

const SmallCard: React.FC<Props> = ({ product }) => {
  return <Card product={product} cardWidthClass={"small-card"} />;
};

export default SmallCard;
