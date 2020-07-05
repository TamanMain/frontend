// Describing the shape of the cart's slice of state
export interface Cart {
  id: string;
  count: number;
}

export interface CartState {
  carts: Cart[];
}

// Describing the different ACTION NAMES available
export const CART_INCREASED = "CART_INCREASED";
export const CART_DECREASED = "CART_DECREASED";
export const CART_REMOVED = "CART_REMOVED";

interface CartIncreasedAction {
  type: typeof CART_INCREASED;
  payload: { id: string };
}

interface CartDecreasedAction {
  type: typeof CART_DECREASED;
  payload: { id: string };
}

interface CartRemovedAction {
  type: typeof CART_REMOVED;
  payload: { id: string };
}

export type CartActionTypes =
  | CartIncreasedAction
  | CartDecreasedAction
  | CartRemovedAction;
