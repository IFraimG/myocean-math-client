import { Dispatch } from "react";

export interface UserTypes {
  login?: string,
  email: string,
  password?: string,
  id?: string
}

export interface UserToken {
  email: string,
  id: string
}

export interface UserLogin {
  email: string,
  password: string
}


export interface stateAuthTypes {
  user: UserTypes | null
  isAuth: boolean
  tokenUser: null | any
  isLoader: boolean
  isNotUser: boolean
  errorLogin: string
  tasksList: Array<any> | null
  isLoaderTasks: boolean
}

export interface ModalAuthInterface {
  isModal: boolean,
  setOpen: (isModal: boolean) => void
  errorLogin: string
}

export interface ProfileTasksInterface {
  item: any
}