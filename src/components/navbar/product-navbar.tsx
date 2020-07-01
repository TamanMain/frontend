import React from "react";
import NavbarBottom from "./navbar-Bottom";
import ProductButton from "./../product-button/product-button";
import "./product-navbar.css";

const ProductNavbar: React.FC = () => {
  return (
    <NavbarBottom>
      <div className="px-2 col-100">
        <ProductButton />
      </div>
    </NavbarBottom>
  );
};

export default ProductNavbar;
