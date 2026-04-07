import { setModalAction } from './../actions/app';
import { setUserAction, setLoaderAction, checkUserAction, setAuthAction, logoutUserAction, setErrorLoginAction, setFinishedTasksAction, setLoaderTasksAction } from './../actions/auth';
import AuthAPI from '../api/auth';
import { AuthEnums } from './../../constants/types';
import { stateAuthTypes, UserTypes, UserLogin } from './../interfaces/auth';

let stateDefault: stateAuthTypes = {
  user: null,
  tasksList: null,
  tokenUser: null,
  isAuth: false,
  isLoaderTasks: false,
  isLoader: false,
  isNotUser: false,
  errorLogin: ""
}

const AuthReducer = (state = stateDefault, action: any): stateAuthTypes => {
  switch (action.type) {
    case AuthEnums.SET_USER: {
      return { ...state, user: action.payload }
    }
    case AuthEnums.SET_AUTH: {
      return { ...state, isAuth: action.payload }
    }
    case AuthEnums.SET_USER_TOKEN: {
      return { ...state, tokenUser: action.payload }
    }
    case AuthEnums.SET_LOADER: {
      return { ...state, isLoader: action.payload }
    }
    case AuthEnums.IS_NOT_USER: {
      return { ...state, isNotUser: action.payload }
    }
    case AuthEnums.LOGOUT_USER: {
      return { ...state, user: null, tokenUser: null, isAuth: false }
    }
    case AuthEnums.SET_LOGIN_ERROR: {
      return { ...state, errorLogin: action.payload }
    }
    case AuthEnums.SET_FINISHED_TASKS: {
      return { ...state, tasksList: action.payload }
    }
    case AuthEnums.SET_LOADER_TASKS: {
      return { ...state, isLoaderTasks: action.payload }
    }
    default: return { ...state }
  }
}

export const registrationThunk = (user: UserTypes) => async (dispatch: any) => {
  let data = await AuthAPI.registration(user)
  localStorage.setItem("token", data.token)

  dispatch(setUserAction(data.user))
  dispatch(setModalAction(false))
}

export const loginThunk = (user: UserLogin) => async (dispatch: any) => {
  let data = await AuthAPI.login(user)
  if (data?.message == "Request failed with status code 401") {
    dispatch(setErrorLoginAction("Пользователя с таким паролем или почтой не существует"))
  } else {
    localStorage.setItem("token", data.token)

    dispatch(setUserAction(data.user))
    await dispatch(setModalAction(false))
    dispatch(setErrorLoginAction(""))
  }
}

export const setFullData = (userID: string) => async (dispatch: any) => {
  dispatch(setLoaderAction(true))
  let data = await AuthAPI.getFullData(userID)
  if (data == "") dispatch(checkUserAction(true))
  else {
    dispatch(checkUserAction(false))
    dispatch(setUserAction(data))
  }
  console.log(data);
  
  dispatch(setLoaderAction(false))
}

export const logout = () => (dispatch: any) => {
  window.sessionStorage.clear()
  window.localStorage.clear()
  document.cookie = ""
  dispatch(logoutUserAction())
}

export const getFinishedTasksThunk = (userID: string) => async (dispatch: any) => {
  dispatch(setLoaderTasksAction(true))

  let tasks = await AuthAPI.getFinishedTasks(userID)
  dispatch(setFinishedTasksAction(tasks))
  
  dispatch(setLoaderTasksAction(false))
}

export default AuthReducer