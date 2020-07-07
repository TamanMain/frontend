// Describing the shape of the cart's slice of state
export interface AccountState {
  status: AccountStatus;
  name: string;
  email: string;
  token: string;
}

export enum AccountStatus {
  RegisterRequest = "RegisterRequest",
  RegisterFail = "RegisterFail",
  RegisterSuccess = "RegisterSuccess",
  SignInRequest = "SignInRequest",
  SignInFail = "SignInFail",
  SignedIn = "SignedIn",
  SignOutRequest = "SignOutRequest",
  SignOutFail = "SignOutFail",
  SignedOut = "SignedOut",
  Blocked = "Blocked",
}

// Describing the different ACTION NAMES available
export const ACCOUNT_REGISTER_REQUEST = "ACCOUNT_REGISTER_REQUEST";
export const ACCOUNT_REGISTER_SUCCESS = "ACCOUNT_REGISTER_SUCCESS";
export const ACCOUNT_REGISTER_FAIL = "ACCOUNT_REGISTER_FAIL";

export const ACCOUNT_SIGN_IN_REQUEST = "ACCOUNT_SIGN_IN_REQUEST";
export const ACCOUNT_SIGN_IN_SUCCESS = "ACCOUNT_SIGN_IN_SUCCESS";
export const ACCOUNT_SIGN_IN_FAIL = "ACCOUNT_SIGN_IN_FAIL";

export const ACCOUNT_SIGN_OUT_REQUEST = "ACCOUNT_SIGN_OUT_REQUEST";
export const ACCOUNT_SIGN_OUT_SUCCESS = "ACCOUNT_SIGN_OUT_SUCCESS";
export const ACCOUNT_SIGN_OUT_FAIL = "ACCOUNT_SIGN_OUT_FAIL";

interface AccountRegisterRequestAction {
  type: typeof ACCOUNT_REGISTER_REQUEST;
  payload: { name: string; email: string; password: string };
}
interface AccountRegisterFailAction {
  type: typeof ACCOUNT_REGISTER_FAIL;
}
interface AccountRegisterSuccessAction {
  type: typeof ACCOUNT_REGISTER_SUCCESS;
  payload: { name: string; email: string };
}

interface AccountSignInRequestAction {
  type: typeof ACCOUNT_SIGN_IN_REQUEST;
  payload: { email: string };
}
interface AccountSignInFailAction {
  type: typeof ACCOUNT_SIGN_IN_FAIL;
}
interface AccountSignInSuccessAction {
  type: typeof ACCOUNT_SIGN_IN_SUCCESS;
  payload: { name: string; email: string; token: string };
}

interface AccountSignOutRequestAction {
  type: typeof ACCOUNT_SIGN_OUT_REQUEST;
}
interface AccountSignOutFailAction {
  type: typeof ACCOUNT_SIGN_OUT_FAIL;
}
interface AccountSignOutSuccessAction {
  type: typeof ACCOUNT_SIGN_OUT_SUCCESS;
  payload: { name: string; email: string; token: string };
}

export type AccountActionTypes =
  | AccountRegisterRequestAction
  | AccountRegisterFailAction
  | AccountRegisterSuccessAction
  | AccountSignInRequestAction
  | AccountSignInSuccessAction
  | AccountSignInFailAction
  | AccountSignOutRequestAction
  | AccountSignOutSuccessAction
  | AccountSignOutFailAction;
