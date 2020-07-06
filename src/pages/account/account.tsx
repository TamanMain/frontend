import React, { useState } from "react";
import DefaultNavbar from "../../components/navbar/default-navbar";
import "./account.css";

const Account: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
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
      <DefaultNavbar />
    </React.Fragment>
  );
};

export default Account;
