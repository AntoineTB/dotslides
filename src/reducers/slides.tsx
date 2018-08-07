import Actions      from "../model/actions"
import ReducerUtils from "../utils/ReducerUtils"
import Slide        from "../model/slide"

interface addSlideActionStruct{
  slide : Slide
}

export const addSlide = (state:Slide[], action : addSlideActionStruct) => {
  return [...state, action.slide]
}

const initialSlides:Slide[] = [
  {
    dotString : `graph A{label="1" a -- b -- {c d}}`,
    shown     : true,
  },
  {
    dotString : `graph A{label="2" a -- {c d} -- b }`,
    shown     : true,
  },
  {
    dotString : `graph A{label="3" a -- b -- { c d }}`,
    shown     : false,
  },
  {
    dotString : `graph A{label="4" a -- { b c d }}`,
    shown     : true,
  },
  {
    dotString : `graph A{label="5" {a b c d} -- {a b c d}}`,
    shown     : true,
  },
]
export const Slides = ReducerUtils.createReducer<Slide[]>(initialSlides,{
  [Actions.ADD_SLIDE] : addSlide
})
