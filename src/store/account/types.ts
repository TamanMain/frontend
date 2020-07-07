// Describing the shape of the cart's slice of state
export interface AccountState {
  status: AccountStatus;
  name: string;
  email: string;
  token?: string;
}

export enum AccountStatus {
  SignedOut = "SignedOut",
  SignedIn = "SignedIn",
  SignInRequest = "SignInRequest",
  SignInFail = "SignInFail",
  Blocked = "Blocked",
}

// Describing the different ACTION NAMES available
export const ACCOUNT_SIGN_IN_REQUEST = "ACCOUNT_SIGN_IN_REQUEST";
export const ACCOUNT_SIGN_IN_SUCCESS = "ACCOUNT_SIGN_IN_SUCCESS";
export const ACCOUNT_SIGN_IN_FAIL = "ACCOUNT_SIGN_IN_FAIL";

interface AccountSignInRequestAction {
  type: typeof ACCOUNT_SIGN_IN_REQUEST;
  payload: { email: string; password: string };
}

interface AccountSignInSuccessAction {
  type: typeof ACCOUNT_SIGN_IN_SUCCESS;
  payload: { email: string; password: string };
}

interface AccountSignInFailAction {
  type: typeof ACCOUNT_SIGN_IN_FAIL;
  payload: { email: string; password: string };
}

export type AccountActionTypes =
  | AccountSignInRequestAction
  | AccountSignInSuccessAction
  | AccountSignInFailAction;
