import React from "react"
import Typography from '@material-ui/core/Typography';
import { fr_stylesText } from "../../core/styles/root/text";
import Alert from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";
import { AppStateType } from "../../core/store/store";

const LevelFinish = () => {
  const textStyles = fr_stylesText()
  const errorsList = useSelector((state: AppStateType) => state.LevelReducer.errorsList)

  return (
    <div>
      <Typography className={textStyles.title} variant="h3">Вы завершили выполнение всех заданий !</Typography>
      { errorsList > 0 ? 
        <Alert icon={false} className={textStyles.alert} variant="filled" color="error">Вы допустили ошибок: { errorsList }</Alert> 
      : <Alert icon={false} className={textStyles.alert} variant="filled" color="success">Вы не допустили ошибок !</Alert> }
    </div>
  )
}

export default LevelFinish