import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FRbutton from './FRbutton';
import FRlink from './FRlink';
import ModalAuth from './ModalAuth';
import { colorTheme } from '../../core/theme/colors';
import { AppStateType } from '../../core/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setModalAction } from '../../core/store/actions/app';

const Header = () => {
  const isModal = useSelector((state: AppStateType) => state.AppReducer.isModal)
  const { isAuth, tokenUser, errorLogin } = useSelector((state: AppStateType) => state.AuthReducer)
  const dispatch = useDispatch()
  
  return (
    <>
      <ModalAuth errorLogin={errorLogin} setOpen={(isModal: boolean) => dispatch(setModalAction(isModal))} isModal={isModal} />
      <AppBar position="sticky" style={{background: colorTheme.lightGreen}}>
        <Toolbar style={{display: "flex", justifyContent: "space-around", gap: "20px"}}>
          <FRlink href="/">
            <Typography variant="h4" style={{fontFamily: "Segoe Print"}}>
              Myocean Math
            </Typography>
          </FRlink>
          { !isAuth ? (
              <FRbutton color="root" onClick={() => dispatch(setModalAction(true))}>
                Авторизация
              </FRbutton>
            )
            : (
              <>
                <FRlink href="/level">
                  <FRbutton>Приступить к прохождению</FRbutton>
                </FRlink>
                <FRlink href={"/profile/" + tokenUser.id}>
                  <FRbutton color="root">
                    Профиль
                  </FRbutton>
                </FRlink>
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header