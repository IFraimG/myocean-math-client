import { LevelEnums } from './../../constants/types';

export type getTasksType = {type: typeof LevelEnums.GET_TASKS, payload: Array<any>}
export const getTasksAction = (tasksList: Array<any>): getTasksType => ({ type: LevelEnums.GET_TASKS, payload: tasksList })

export type setLevelType = {type: typeof LevelEnums.SET_LEVEL, payload: number}
export const setLevelAction = (level: number): setLevelType => ({ type: LevelEnums.SET_LEVEL, payload: level })

export type setCurrentTaskType = {type: typeof LevelEnums.SET_CURRENT_TASK, payload: any}
export const setCurrentTaskAction = (level: any): setCurrentTaskType => ({ type: LevelEnums.SET_CURRENT_TASK, payload: level })

export type setFinishType = {type: typeof LevelEnums.SET_FINISHED, payload: boolean }
export const setFinishAction = (isFinished: boolean): setFinishType => ({ type: LevelEnums.SET_FINISHED, payload: isFinished })

export type clearTasksType = {type: typeof LevelEnums.CLEAR_TASKS }
export const clearTasksAction = (): clearTasksType => ({ type: LevelEnums.CLEAR_TASKS })

export type setErrorType = {type: typeof LevelEnums.SET_ERROR, payload: boolean }
export const setErrorAction = (isError: boolean): setErrorType => ({ type: LevelEnums.SET_ERROR, payload: isError })

export type getErrorsType = {type: typeof LevelEnums.GET_ERRORS, payload: number }
export const getErrorsAction = (errors: number): getErrorsType => ({ type: LevelEnums.GET_ERRORS, payload: errors })
