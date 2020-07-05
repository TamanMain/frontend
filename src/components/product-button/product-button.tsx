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
import { Cart } from "./../../store/cart/types";

interface Props {
  product: Product;
  cartIncresed: typeof cartIncresed;
  cartDecresed: typeof cartDecresed;
  cartRemoved: typeof cartRemoved;
  carts: Cart[];
}

const ProductButton: React.FC<Props> = ({
  product,
  carts,
  cartIncresed,
  cartDecresed,
}) => {
  const inCart = carts.find((c) => c.id === product._id);
  return (
    <div className="col-100 center">
      {!inCart ? (
        <Button name="Beli" action={() => cartIncresed(product._id)} />
      ) : (
        <React.Fragment>
          <Button name="-" action={() => cartDecresed(product._id)} />
          <div className="col-100 center product-button-counter">
            <span>{inCart.count}</span>
          </div>
          <Button name="+" action={() => cartIncresed(product._id)} />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  carts: state.cart.carts,
});

export default connect(mapStateToProps, {
  cartIncresed,
  cartDecresed,
  cartRemoved,
})(ProductButton);
