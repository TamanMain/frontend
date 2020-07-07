import Cookie from "js-cookie";
import {
  AccountState,
  ACCOUNT_SIGN_IN_REQUEST,
  ACCOUNT_SIGN_IN_SUCCESS,
  ACCOUNT_SIGN_IN_FAIL,
  AccountActionTypes,
  AccountStatus,
} from "./types";

const accountState = Cookie.getJSON("accountCookie") || null;
console.log(accountState);

const initialState: AccountState = {
  status: AccountStatus.SignedOut,
  name: "",
  email: "",
};

function accountReducer(
  state = accountState || initialState,
  action: AccountActionTypes
): AccountState {
  switch (action.type) {
    case ACCOUNT_SIGN_IN_REQUEST:
      return { ...state, status: AccountStatus.SignInRequest };
    case ACCOUNT_SIGN_IN_SUCCESS:
      return { ...state, status: AccountStatus.SignedIn };
    case ACCOUNT_SIGN_IN_FAIL:
      return { ...state, status: AccountStatus.SignInFail };
    default:
      return state;
  }
}

export { accountReducer };
