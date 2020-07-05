import React from "react";
import Product from "../../objects/Product";
import Card from "./card";
import "./small-card.css";

interface Props {
  product: Product;
}

const SmallCard: React.FC<Props> = ({ product }) => {
  return <Card product={product} cardWidthClass={"small-card"} />;
};

export default SmallCard;
