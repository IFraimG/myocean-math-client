import  { useEffect } from "react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import Level from "../components/level/Level"
import AuthAPI from "../core/store/api/auth"
import { getTasksThunk } from "../core/store/reducers/level"
import { AppStateType } from "../core/store/store"

const LevelPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { tasksList, currentLevel, currentTask, isFinished, isError } = useSelector((state: AppStateType) => state.LevelReducer)
  const userID = useSelector((state: AppStateType) => state.AuthReducer.tokenUser)
  const { isLoader } = useSelector((state: AppStateType) => state.AuthReducer)
  
  useEffect(() => {
    AuthAPI.checkauth().then(res => {
      if (!res.isAuth) history.push("/")
    })
    dispatch(getTasksThunk())
  }, [])

  if (tasksList.length > 0 && currentTask != null) return <Level 
    isLoader={isLoader} 
    tasksList={tasksList} 
    currentTask={currentTask} 
    currentLevel={currentLevel} 
    isFinished={isFinished}
    userID={userID}
    isError={isError}
  />
  else return <div>loading....</div>
}
  
export default LevelPage