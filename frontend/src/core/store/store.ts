import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import AuthReducer from "./reducers/auth"
import AppReducer from "./reducers/app"
import LevelReducer from "./reducers/level"

// @ts-ignore

let rootReducer = combineReducers({ AuthReducer, AppReducer, LevelReducer })

export type AppStateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store