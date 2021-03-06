import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/account/actions";
import "./account-login.css";

const AccountLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  return (
    <React.Fragment>
      <div className="account-login">
        <h1>Login</h1>
        <form className="col-100" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" className="button" value="Login" />
        </form>
        <br />
        <p>Belum punya akun?</p>
        <strong>
          <Link to="/account/register">Daftar</Link>
        </strong>
      </div>
    </React.Fragment>
  );
};

export default AccountLogin;
