import { useEffect, useRef, useState } from "react"
import React from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import styles from "../../core/styles/level/level.module.scss"
import fone from "../../assets/fonegame.jpg"
import FRbutton from "../app/FRbutton";
import { fr_stylesText } from "../../core/styles/root/text";
import { fr_stylesInput } from "../../core/styles/root/input";
import { createCanvas } from "./canvas";
import { Modal, TextField, Typography, Backdrop, Fade } from "@material-ui/core";
import { LevelPageTypes } from "../../core/store/interfaces/level";
import { clearTasksAction } from "../../core/store/actions/level";
import LevelForm from "./LevelForm";
import { setAnswerThunk } from "../../core/store/reducers/level";
import { useDispatch } from "react-redux";
import LevelFinish from "./LevelFinish";
import { useHistory } from "react-router";
import Alert from "@material-ui/lab/Alert";
import { fr_stylesModal } from "../../core/styles/root/modal";

const Level: React.FC<LevelPageTypes> = ({ tasksList, currentLevel, isLoader, currentTask, isFinished, userID, isError }) => {
  const canvas = useRef<any>(null)
  const inputField = useRef(null)
  const [isModal, setModalImage] = useState<boolean>(false)
  const [answer, setAnswer] = useState<string | null>(null)
  const textStyles = fr_stylesText()
  const inputStyles = fr_stylesInput()
  const modalStyles = fr_stylesModal()
  const dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    let isAnimation: any = null
    const render = () => {
      createCanvas(canvas, currentLevel)
      isAnimation = window.requestAnimationFrame(render)
    }

    render()
    return () => window.cancelAnimationFrame(isAnimation)
  }, [])

  useEffect(() => {
    let isAnimation: any = null
    const render = () => {
      createCanvas(canvas, currentLevel)
      isAnimation = window.requestAnimationFrame(render)
    }
      
    render()
    return () => window.cancelAnimationFrame(isAnimation)
  }, [currentLevel])

  useEffect(() => {
    if (!isLoader) window.scrollTo({ behavior: "smooth", top: 600 })
  }, [isLoader])

  useEffect(() => {
    console.log(inputField.current);
    setAnswer(null)
  }, [currentLevel])

  const sendAnswer = (answer: string) => dispatch(setAnswerThunk(answer, currentTask.answer, currentLevel, userID))
  const sendInputData = (value: string) => setAnswer(value)
  const clearTask = () => {
    window.sessionStorage.clear()
    dispatch(clearTasksAction())
    
    history.push("/profile/" + userID.id)
  }

  return (
    <>
      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={isModal}
          onClose={() => setModalImage(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500 }}
          className={modalStyles.modal}
        >
          <Fade in={isModal}>
            <Card className={modalStyles.cardImageBackground}>
              <CardContent>
                <img className={modalStyles.cardImage} src={"https://myoceanmathserver.herokuapp.com/files/" + currentTask.src} alt=""/>
              </CardContent>
            </Card>
          </Fade>
        </Modal>
      <div className={styles.frlevel__wrapper}>
        <div className={styles.frlevel__left}>
          <canvas width="450" height="800" className={styles.frlevel__canvas} id="level-canvas" resize="true" ref={canvas} />
          <img className={styles.frlevel__fone} src={fone} />
        </div>
        <div className={styles.frlevel__interface}>
          <Card className={styles.frlevel__stats}>
            <CardContent className={styles.frlevel__content}>
              <h1>Статистика</h1>
              { !isFinished ? 
                <div className={styles.frlevel__inner}>
                  <div className={styles.frlevel__field}>
                    <Typography style={{paddingLeft: "50px", paddingTop: "70px"}} variant="h4">{currentTask.title}</Typography>
                    <p style={{paddingLeft: "50px"}} className={textStyles.tasks}>{currentTask.text}</p>
                    <img onDoubleClick={() => setModalImage(true)} src={"https://myoceanmathserver.herokuapp.com/files/" + currentTask.src} alt=""/>
                    <p 
                      style={{fontSize: "14px", marginLeft: "50px", cursor: "pointer", textDecoration: "underline"}} 
                      onClick={() => setModalImage(true)}
                    >Открыть в полном размере</p>
                  </div>
                  <div className={styles.frlevel__right}>
                    {currentTask?.otherSrc != null ?  <img src={"https://myoceanmathserver.herokuapp.com/files/" + currentTask.otherSrc} /> : ""}
                    { currentTask.others.length == 0 ? <>
                        <TextField
                          style={{ margin: "20px 0" }}
                          placeholder="Введите ответ"
                          helperText="Ответ должен быть числом"
                          fullWidth
                          onChange={(event: any) => sendInputData(event.target.value)}
                        />
                        <FRbutton onClick={() => sendAnswer(answer)}>Проверить</FRbutton>
                      </>
                    : <LevelForm sendAnswer={sendAnswer} answers={currentTask.others} truthy={currentTask.answer} /> }
                    { isError ? <Alert style={{margin: "20px 0"}} color="error" variant="filled">Неверный ответ !</Alert> : "" }
                  </div>
                </div>
              : <LevelFinish /> }
            </CardContent>
            <CardActions className={styles.frlevel__actions}>
              <FRbutton onClick={clearTask}>Завершить</FRbutton>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Level