import {
  ACCOUNT_SIGN_IN_REQUEST,
  ACCOUNT_SIGN_IN_FAIL,
  ACCOUNT_SIGN_IN_SUCCESS,
} from "./types";
import { Dispatch } from "redux";
import Axios from "axios";
import Cookie from "js-cookie";

const signIn = (email: string, password: string) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: ACCOUNT_SIGN_IN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/users/login", {
      email,
      password,
    });
    dispatch({ type: ACCOUNT_SIGN_IN_SUCCESS, payload: data });
    Cookie.set("accountCookie", JSON.stringify(data));
  } catch (err) {
    dispatch({ type: ACCOUNT_SIGN_IN_FAIL, payload: err.message });
  }
};

export { signIn };
