import { useState } from 'react';
import React from "react"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { fr_stylesModal } from '../../core/styles/root/modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Registration from '../auth/Registration';
import Login from '../auth/Login';
import Typography from '@material-ui/core/Typography';
import { ModalAuthInterface } from '../../core/store/interfaces/auth';
import { setErrorLoginAction } from '../../core/store/actions/auth';
import { useDispatch } from 'react-redux';

const ModalAuth: React.FC<ModalAuthInterface> = ({ isModal, setOpen, errorLogin }) => {
  const modalStyles = fr_stylesModal()
  const [tabAuth, setTabs] = useState<number>(0)
  const dispatch = useDispatch()

  const changeTabs = (event: React.ChangeEvent<{}>, tab: number) => {
    dispatch(setErrorLoginAction(""))
    setTabs(tab)
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModal}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500 }}
        className={modalStyles.modal}
      >
        <Fade in={isModal}>
          <Card className={modalStyles.card} variant="outlined">
            <CardContent>
              <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px"}}>
                <Typography className={modalStyles.text} variant="h4">Авторизация</Typography>
                <Tabs 
                  indicatorColor="primary" 
                  textColor="primary" 
                  value={tabAuth} 
                  onChange={changeTabs}
                >
                  <Tab className={modalStyles.text} label="Регистрация" />
                  <Tab className={modalStyles.text} label="Вход" />
                </Tabs>
              </div>
              <div>
                { tabAuth == 0 ? <Registration /> : <Login errorLogin={errorLogin} /> }
              </div>
              </CardContent>
            </Card>
        </Fade>
      </Modal>
    </div>
  )
}

export default ModalAuth