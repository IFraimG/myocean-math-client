import { AuthEnums } from './../../constants/types';
import { UserTypes, UserToken } from './../interfaces/auth';

export type setUserType = { type: typeof AuthEnums.SET_USER, payload: UserTypes }
export const setUserAction = (user: UserTypes): setUserType => ({ type: AuthEnums.SET_USER, payload: user })

export type setAuthType = {type: typeof AuthEnums.SET_AUTH, payload: boolean}
export const setAuthAction = (isAuth: boolean): setAuthType => ({type: AuthEnums.SET_AUTH, payload: isAuth})

export type setLoaderType = {type: typeof AuthEnums.SET_LOADER, payload: boolean}
export const setLoaderAction = (isLoader: boolean): setLoaderType => ({type: AuthEnums.SET_LOADER, payload: isLoader})

export type setUserTokenType = {type: typeof AuthEnums.SET_USER_TOKEN, payload: UserToken}
export const setUserTokenAction = (user: UserToken): setUserTokenType => ({type: AuthEnums.SET_USER_TOKEN, payload: user})

export type checkUserType = {type: typeof AuthEnums.IS_NOT_USER, payload: boolean}
export const checkUserAction = (isUser: boolean): checkUserType => ({type: AuthEnums.IS_NOT_USER, payload: isUser})

export type logoutUserType = {type: typeof AuthEnums.LOGOUT_USER }
export const logoutUserAction = (): logoutUserType => ({ type: AuthEnums.LOGOUT_USER })

export type setErrorLoginType = {type: typeof AuthEnums.SET_LOGIN_ERROR, payload: string }
export const setErrorLoginAction = (err: string): setErrorLoginType => ({ type: AuthEnums.SET_LOGIN_ERROR, payload: err })

export type setFinishedTasksType = {type: typeof AuthEnums.SET_FINISHED_TASKS, payload: Array<any> }
export const setFinishedTasksAction = (tasksList: Array<any> ): setFinishedTasksType => ({ type: AuthEnums.SET_FINISHED_TASKS, payload: tasksList })

export type setLoaderTasksType = {type: typeof AuthEnums.SET_LOADER_TASKS, payload: boolean }
export const setLoaderTasksAction = (isLoaderTasks: boolean): setLoaderTasksType => ({ type: AuthEnums.SET_LOADER_TASKS, payload: isLoaderTasks })
