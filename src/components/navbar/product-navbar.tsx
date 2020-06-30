import React from "react";
import NavbarBottom from "./navbar-Bottom";
import Button from "../button/button";
import ButtonSecondary from "../button/button-secondary";

const ProductNavbar: React.SFC = (props) => {
  return (
    <NavbarBottom>
      <div className="pl-2 pr-1 col-25">
        <ButtonSecondary name="Back" />
      </div>
      <div className="pl-1 pr-2 col-75">
        <Button name="Beli" />
      </div>
    </NavbarBottom>
  );
};

export default ProductNavbar;
