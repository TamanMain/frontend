import { Dispatch } from "redux";
import Axios from "axios";
import Cookie from "js-cookie";
import {
  AccountStatus,
  ACCOUNT_SIGN_IN_REQUEST,
  ACCOUNT_SIGN_IN_FAIL,
  ACCOUNT_SIGN_IN_SUCCESS,
  ACCOUNT_SIGN_OUT_REQUEST,
  ACCOUNT_SIGN_OUT_SUCCESS,
  ACCOUNT_SIGN_OUT_FAIL,
} from "./types";

const signIn = (email: string, password: string) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: ACCOUNT_SIGN_IN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/users/login", {
      email,
      password,
    });
    const account = { ...data, status: AccountStatus.SignedIn };
    dispatch({
      type: ACCOUNT_SIGN_IN_SUCCESS,
      payload: account,
    });
    Cookie.set("account", JSON.stringify(account));
  } catch (err) {
    dispatch({ type: ACCOUNT_SIGN_IN_FAIL, payload: err.message });
  }
};

const signOut = (email: string) => async (dispatch: Dispatch) => {
  dispatch({ type: ACCOUNT_SIGN_OUT_REQUEST });
  try {
    // const { data } = await Axios.post("/users/signout", { email });
    const account = {
      status: AccountStatus.SignedOut,
      token: "",
      name: "",
      email: "",
    };
    dispatch({
      type: ACCOUNT_SIGN_OUT_SUCCESS,
      payload: account,
    });
    Cookie.remove("account");
  } catch (err) {
    dispatch({ type: ACCOUNT_SIGN_OUT_FAIL, payload: err.message });
  }
};

export { signIn, signOut };
