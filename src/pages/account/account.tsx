import React, { useState, useEffect } from "react";
import AccountLogin from "./account-login";
import DefaultNavbar from "../../components/navbar/default-navbar";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import AccountDetails from "./account-details";
import "./account.css";
import AccountRegister from "./account-register";
import { useLocation } from "react-router-dom";

const Account: React.FC = () => {
  const account = useSelector((state: AppState) => state.account);
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <React.Fragment>
      {account.token ? (
        <AccountDetails />
      ) : account.status === "RegisterSuccess" ||
        pathname !== "/account/register" ? (
        <AccountLogin />
      ) : (
        <AccountRegister />
      )}
      <DefaultNavbar />
    </React.Fragment>
  );
};

export default Account;
