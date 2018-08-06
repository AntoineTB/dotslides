import {combineReducers,Reducer } from 'redux'
import {ScreenSize}               from "../ScreenSize"

export const allReducers : Reducer<{}> = combineReducers({
  ScreenSize,
})
