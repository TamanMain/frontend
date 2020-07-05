import React from "react";
import Product from "../../objects/Product";
import Button from "../button/button";
import { connect } from "react-redux";
import "./product-button.css";
import {
  cartIncresed,
  cartDecresed,
  cartRemoved,
} from "./../../store/cart/actions";
import { AppState } from "../../store";
import { CartState } from "./../../store/cart/types";

interface Props {
  product: Product;
  cartIncresed: typeof cartIncresed;
  cartDecresed: typeof cartDecresed;
  cartRemoved: typeof cartRemoved;
  cart: CartState;
}

const ProductButton: React.FC<Props> = ({
  product,
  cart,
  cartIncresed,
  cartDecresed,
}) => {
  const inCart = cart.products.find((c) => c.id === product._id);
  return (
    <div className="col-100 center">
      {!inCart ? (
        <Button name="Beli" action={() => cartIncresed(product._id)} />
      ) : (
        <div className="col-100 center product-button-counter">
          <Button name="-" action={() => cartDecresed(product._id)} />
          <div className="col-100 center">
            <span>{inCart.count}</span>
          </div>
          <Button name="+" action={() => cartIncresed(product._id)} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  cartIncresed,
  cartDecresed,
  cartRemoved,
})(ProductButton);
