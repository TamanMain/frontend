import {
  CartProduct,
  CartState,
  CartActionTypes,
  CART_INCREASED,
  CART_DECREASED,
  CART_REMOVED,
} from "./types";

const initialState: CartState = {
  total: 0,
  products: [],
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case CART_INCREASED:
    case CART_DECREASED:
    case CART_REMOVED:
      const carts = processCarts(state, action);
      return { ...carts };
    default:
      return state;
  }
}

function processCarts(carts: CartState, action: CartActionTypes): CartState {
  const { products } = carts;
  let newTotal = carts.total;

  const newProducts = products.filter((c) => c.id !== action.payload.id);
  const productInCart = products.find((c) => c.id === action.payload.id);
  const product: CartProduct = { id: action.payload.id, count: 1 };

  switch (action.type) {
    case CART_INCREASED:
      if (productInCart) {
        product.count = productInCart.count + 1;
      }
      newTotal += 1;
      newProducts.push(product);
      break;
    case CART_DECREASED:
      if (productInCart && productInCart.count > 1) {
        product.count = productInCart.count - 1;
        newProducts.push(product);
        newTotal -= 1;
      } else if (productInCart && productInCart.count === 1) {
        // Removed from cart
        newTotal -= 1;
      }
      // else: Not in from cart
      break;
    case CART_REMOVED:
      // Removed from carts
      if (productInCart) {
        newTotal -= productInCart.count;
      }
      break;
  }

  return { products: [...newProducts], total: newTotal };
}
