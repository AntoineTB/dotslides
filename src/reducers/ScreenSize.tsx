import Actions      from "../model/actions"
import ReducerUtils from "../utils/ReducerUtils"

export const storeScreenSize = (state, action) => {
  return window.innerWidth
}

export const ScreenSize = ReducerUtils.createReducer<number>(-1,{
  [Actions.PROVIDE_SCREEN_SIZE] : storeScreenSize
})
