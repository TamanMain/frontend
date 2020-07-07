import Cookie from "js-cookie";
import {
  AccountState,
  AccountStatus,
  AccountActionTypes,
  ACCOUNT_SIGN_IN_REQUEST,
  ACCOUNT_SIGN_IN_SUCCESS,
  ACCOUNT_SIGN_IN_FAIL,
  ACCOUNT_SIGN_OUT_REQUEST,
  ACCOUNT_SIGN_OUT_SUCCESS,
  ACCOUNT_SIGN_OUT_FAIL,
} from "./types";

const accountState = Cookie.getJSON("account") || null;

const initialState: AccountState = {
  status: AccountStatus.SignedOut,
  name: "",
  email: "",
  token: "",
};

function accountReducer(
  state = accountState || initialState,
  action: AccountActionTypes
): AccountState {
  switch (action.type) {
    case ACCOUNT_SIGN_IN_REQUEST:
      return {
        ...state,
        email: action.payload.email,
        status: AccountStatus.SignInRequest,
      };
    case ACCOUNT_SIGN_IN_FAIL:
      return { ...state, status: AccountStatus.SignInFail };
    case ACCOUNT_SIGN_IN_SUCCESS:
      return {
        status: AccountStatus.SignedIn,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case ACCOUNT_SIGN_OUT_REQUEST:
      return { ...state, status: AccountStatus.SignOutRequest };
    case ACCOUNT_SIGN_OUT_FAIL:
      return { ...state, status: AccountStatus.SignOutFail };
    case ACCOUNT_SIGN_OUT_SUCCESS:
      return {
        status: AccountStatus.SignedOut,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    default:
      return state;
  }
}

export { accountReducer };
