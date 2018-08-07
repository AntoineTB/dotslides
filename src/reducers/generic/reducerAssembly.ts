import {combineReducers,Reducer } from 'redux'
import {ScreenSize}               from "../ScreenSize"
import {Slides}                   from "../slides"
import {SelectedSlide}            from "../selectedSlide"

export const allReducers : Reducer<{}> = combineReducers({
  ScreenSize,
  Slides,
  SelectedSlide,
})
