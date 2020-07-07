import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { AccountStatus } from "../../store/account/types";
import { signIn } from "../../store/account/actions";
import "./account-login.css";

const AccountLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const account = useSelector((state: AppState) => state.account);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (account.status === AccountStatus.SignedIn) {
      history.push("/"); // User signed in, go to home page
    }
  }, [account.status, history]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  return (
    <React.Fragment>
      <div className="account-login">
        <p>Login</p>
        <form className="col-100" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AccountLogin;
