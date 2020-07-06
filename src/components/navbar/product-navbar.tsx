import React from "react";
import Product from "../../objects/Product";
import NavbarBottom from "./navbar-bottom";
import ProductButton from "./../product-button/product-button";
import "./product-navbar.css";

interface Props {
  product: Product;
}

const ProductNavbar: React.FC<Props> = ({ product }) => {
  return (
    <NavbarBottom>
      <div className="px-2 col-100">
        <ProductButton product={product} />
      </div>
    </NavbarBottom>
  );
};

export default ProductNavbar;
