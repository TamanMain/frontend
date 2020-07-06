import React from "react";
import DefaultNavbar from "../../components/navbar/default-navbar";
import "./account.css";

const Account: React.FC = () => {
  return (
    <React.Fragment>
      <div className="account-login">
        <p>Login</p>
        <form className="col-100">
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
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
