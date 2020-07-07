import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../store/account/actions";
import "./account-login.css";

const AccountRegister: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <React.Fragment>
      <div className="account-login">
        <h1>Daftar</h1>
        <form className="col-100" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Nama"
            onChange={(e) => setName(e.target.value)}
          />
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
          <input type="submit" className="button" value="Daftar" />
        </form>
        <br />
        <p>Sudah punya akun?</p>
        <strong>
          <Link to="/account/login">Masuk</Link>
        </strong>
      </div>
    </React.Fragment>
  );
};

export default AccountRegister;
