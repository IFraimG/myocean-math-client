import { useEffect } from "react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { setFullData, logout } from "../../core/store/reducers/auth"
import { AppStateType } from "../../core/store/store"

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, Link } from "@material-ui/core"
import Alert from '@material-ui/lab/Alert';
import FRbutton from "../app/FRbutton"
import FRlink from "../app/FRlink"
import FinishedTask from "./FinishedTask"

const Profile = () => {
  const params: any = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const { user, isLoader, isNotUser, tasksList, isLoaderTasks } = useSelector((state: AppStateType) => state.AuthReducer)
  
  useEffect(() => {
    dispatch(setFullData(params.id))
  }, [])

  const logoutUser = () => {
    dispatch(logout())
    history.push("/")
  }
  
  if (!isLoader && !isNotUser) return (
    <>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap"}}>
        <Card style={{width: "400px", margin: "50px", textAlign: "center"}}>
          <CardContent>
            <Typography variant="h3">
              { user?.login }
            </Typography>
            <Typography variant="h6">
              { user?.email }
            </Typography>
          </CardContent>
          <CardActions>
            <FRbutton onClick={logoutUser}>Выйти</FRbutton>
          </CardActions>
        </Card>
        <div>
          <Typography style={{ marginBottom: "20px" }} variant="h3">
            Выполнено заданий: { user?.tasks.length }
          </Typography>
          <FRlink href="/level">
            <FRbutton>Приступить к прохождению</FRbutton>
          </FRlink>
        </div>
      </div>
      { !isLoaderTasks ? 
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
          { tasksList != null && tasksList?.length > 0 ?
            tasksList.map((item, index) => {
              return <FinishedTask key={index} item={item} />
          })
          : "" }
        </div>
      : <CircularProgress style={{marginLeft: "50px"}} /> }
    </>
  )
  if (isNotUser && !isLoader) return <Alert style={{ marginTop: "50px" }} severity="error">Такого пользователя не существует !</Alert>
  if (isLoader) return <CircularProgress />
}

export default Profile