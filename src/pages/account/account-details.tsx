import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

const AccountDetails: React.FC = () => {
  const account = useSelector((state: AppState) => state.account);

  return (
    <React.Fragment>
      <div className="account-login">
        <p>{account.name}</p>
        <p>{account.email}</p>
      </div>
    </React.Fragment>
  );
};

export default AccountDetails;
