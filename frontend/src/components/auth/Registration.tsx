import  { useRef, useState } from "react";
import React from "react"
import FRbutton from "../app/FRbutton";
import { fr_stylesModal } from "../../core/styles/root/modal";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { registrationThunk } from "../../core/store/reducers/auth";
import { AppStateType } from "../../core/store/store";
import { useHistory } from "react-router";
import Alert from "@material-ui/lab/Alert";

const Registration = () => {
  const modalStyles = fr_stylesModal();
  const [regData, setData] = useState({ email: "", password: "", login: "" });
  const passwordInput = useRef<any>(null)
  const { isAuth, user, errorLogin } = useSelector((state: AppStateType) => state.AuthReducer)
  const history = useHistory()
  const dispatch = useDispatch()
  
  const sendData = () => {
    dispatch(registrationThunk(regData))
    if (isAuth) history.push("/profile/" + user.id)
  }


  return (
    <form className={modalStyles.form}>
      <TextField
        name="login"
        label="Логин"
        variant="outlined"
        onChange={(event) => setData({...regData, login: event.target.value})}
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        onChange={(event) => setData({...regData, email: event.target.value})}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        ref={passwordInput}
        variant="outlined"
        onChange={(event) => setData({...regData, password: event.target.value})}
      />
      { errorLogin != "" ? <Alert variant="filled" color="error">{ errorLogin }</Alert> : "" }
      <FRbutton onClick={sendData}>
        Зарегистрироваться
      </FRbutton>
    </form>
  );
};

export default Registration;
