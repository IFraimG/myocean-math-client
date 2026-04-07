import { useEffect, useState } from "react";
import React from "react"
import FRbutton from "../app/FRbutton";
import { fr_stylesModal } from "../../core/styles/root/modal";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../core/store/reducers/auth";
import { useHistory } from "react-router";
import { AppStateType } from "../../core/store/store";
import Alert from "@material-ui/lab/Alert";

const Login = () => {
  const modalStyles = fr_stylesModal();
  const [regData, setData] = useState({ email: "", login: "", password: "" });
  const dispatch = useDispatch()
  const history = useHistory()
  const { errorLogin, user } = useSelector((state: AppStateType) => state.AuthReducer)

  const sendData = async () => {
    dispatch(loginThunk(regData))
  }

  useEffect(() => {
    if (user != null) history.push("/profile/" + user.id)
  }, [user])

  return (
    <form className={modalStyles.form}>
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
        variant="outlined"
        onChange={(event) => setData({...regData, password: event.target.value})}
      />
      { errorLogin != "" ? <Alert variant="filled" color="error">{ errorLogin }</Alert> : "" }
      <FRbutton onClick={sendData}>Войти</FRbutton>
    </form>
  );
};

export default Login;
