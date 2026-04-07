import { getTasksAction, setLevelAction, setCurrentTaskAction, setFinishAction, setErrorAction, getErrorsAction } from './../actions/level';
import LevelAPI from '../api/level';
import { LevelEnums } from './../../constants/types';
import { stateLevelTypes } from './../interfaces/level';

let stateDefault: stateLevelTypes = {
  tasksList: [],
  currentTask: null,
  currentLevel: 1,
  isFinished: false,
  isError: false,
  errorsList: 0
}

const LevelReducer = (state = stateDefault, action: any): stateLevelTypes => {
  switch (action.type) {
    case LevelEnums.GET_TASKS: {
      return { ...state, tasksList: action.payload }
    }
    case LevelEnums.SET_LEVEL: {
      return { ...state, currentLevel: action.payload }
    }
    case LevelEnums.SET_CURRENT_TASK: {
      return { ...state, currentTask: action.payload }
    }
    case LevelEnums.SET_FINISHED: {
      return { ...state, isFinished: action.payload }
    }
    case LevelEnums.CLEAR_TASKS: {
      return { ...state, isFinished: false, currentTask: 1, tasksList: [] }
    }
    case LevelEnums.SET_ERROR: {
      return { ...state, isError: action.payload }
    }
    case LevelEnums.GET_ERRORS: {
      return { ...state, errorsList: action.payload }
    }
    default: return { ...state }
  }
}

export const getTasksThunk = () => async (dispatch: any) => {
  let sessionTasks = window.sessionStorage.getItem("tasks")
  let level = window.sessionStorage.getItem("level")
  let errors = window.sessionStorage.getItem("mistakes")
  let isFinished = window.sessionStorage.getItem("isFinished")

  if (JSON.parse(isFinished)) {
    dispatch(setFinishAction(true))
    if (level != null) dispatch(setLevelAction(JSON.parse(level)))
    if (errors != null) dispatch(getErrorsAction(JSON.parse(errors)))
  }
  if (sessionTasks == null) {
    let data = await LevelAPI.getTasks()
    dispatch(getTasksAction(data))
    dispatch(setCurrentTaskAction(data[0]))

    window.sessionStorage.setItem("tasks", JSON.stringify(data))
    window.sessionStorage.setItem("level", JSON.stringify(1))
  } else {
    dispatch(getTasksAction(JSON.parse(sessionTasks)))
    dispatch(setCurrentTaskAction(JSON.parse(sessionTasks)[JSON.parse(level - 1)]))
    dispatch(setLevelAction(JSON.parse(level)))
  }
}

export const setAnswerThunk = (answer: string, truthy: string, level: number, userID: string) => async (dispatch: any) => {
  if (answer == truthy) {
    let tasks = sessionStorage.getItem("tasks")
    
    dispatch(setErrorAction(false))
    if (JSON.parse(tasks)[level] != null) {
      sessionStorage.setItem("level", String(level + 1))

      dispatch(setCurrentTaskAction(JSON.parse(tasks)[level]))
      dispatch(setLevelAction(level + 1))
    } else {
      let errors = window.sessionStorage.getItem("mistakes")
      if (errors != null) dispatch(getErrorsAction(JSON.parse(errors)))
      
      sessionStorage.setItem("isFinished", JSON.stringify(true))
      dispatch(setFinishAction(true))

      await LevelAPI.saveTasks(JSON.parse(tasks), userID)
    }
  } else {
    let mistakes = sessionStorage.getItem("mistakes")
    if (mistakes != null) sessionStorage.setItem("mistakes", String(parseInt(mistakes) + 1))
    else sessionStorage.setItem("mistakes", String(1))
    dispatch(setErrorAction(true))
  }
}

export default LevelReducer