import Actions      from "../model/actions"
import ReducerUtils from "../utils/ReducerUtils"
import Slide        from "../model/slide"

interface selectSlideActionStruct{
  slideNumber : number
}

export const selectSlide = (state:number, action : selectSlideActionStruct) => {
  return action.slideNumber
}

export const SelectedSlide = ReducerUtils.createReducer<number>(0,{
  [Actions.OPEN_SLIDE] : selectSlide
})
