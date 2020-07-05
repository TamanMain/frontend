import {
  Cart,
  CartState,
  CartActionTypes,
  CART_INCREASED,
  CART_DECREASED,
  CART_REMOVED,
} from "./types";

const initialState: CartState = {
  carts: [],
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case CART_INCREASED:
    case CART_DECREASED:
    case CART_REMOVED:
      return {
        carts: processCarts(state.carts, action),
      };
    default:
      return state;
  }
}

function processCarts(carts: Cart[], action: CartActionTypes): Cart[] {
  const newCarts = carts.filter((c) => c.id !== action.payload.id);
  const inCart = carts.find((c) => c.id === action.payload.id);
  const cart: Cart = { id: action.payload.id, count: 1 };

  switch (action.type) {
    case CART_INCREASED:
      if (inCart) {
        cart.count = inCart.count + 1;
      }
      newCarts.push(cart);
      break;
    case CART_DECREASED:
      if (inCart && inCart.count > 1) {
        cart.count = inCart.count - 1;
        newCarts.push(cart);
      }
      // else: Removed from cart
      break;
    case CART_REMOVED:
      // Do nothing just return the new carts
      break;
  }

  return newCarts;
}
