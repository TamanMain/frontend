import { CART_INCREASED, CART_DECREASED, CART_REMOVED } from "./types";

export function cartIncresed(id: string) {
  return {
    type: CART_INCREASED,
    payload: { id },
  };
}

export function cartDecresed(id: string) {
  return {
    type: CART_DECREASED,
    payload: { id },
  };
}

export function cartRemoved(id: string) {
  return {
    type: CART_REMOVED,
    payload: { id },
  };
}
