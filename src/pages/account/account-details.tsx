import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "../../store";
import { signOut } from "../../store/account/actions";
import ButtonSecondary from "../../components/button/button-secondary";

const AccountDetails: React.FC = () => {
  const account = useSelector((state: AppState) => state.account);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(signOut(account.email));
    history.push("/account");
  };

  return (
    <React.Fragment>
      <div className="account-login">
        <h3>{account.name}</h3>
        <p>{account.email}</p>
        <br />
        <ButtonSecondary name="Sign Out" action={signOutHandler} />
      </div>
    </React.Fragment>
  );
};

export default AccountDetails;
