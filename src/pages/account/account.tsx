import React from "react";
import AccountLogin from "./account-login";
import DefaultNavbar from "../../components/navbar/default-navbar";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import AccountDetails from "./account-details";
import "./account.css";

const Account: React.FC = () => {
  const account = useSelector((state: AppState) => state.account);

  return (
    <React.Fragment>
      {account.token ? <AccountDetails /> : <AccountLogin />}
      <DefaultNavbar />
    </React.Fragment>
  );
};

export default Account;
