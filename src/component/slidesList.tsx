import * as React        from 'react'
import {connect}         from 'react-redux'
import Slide             from '../model/slide'
import Actions           from '../model/actions'
import SlideThumbnail    from './slideThumbnail'

interface SlidesListProps{
  slides : Slide[]
  setSelectedSlide : (Slide)=>void
}

const SlidesList_dumb:React.SFC<SlidesListProps> = (props:SlidesListProps)=>{
  return <div className='SlidesList'>
    <h2>SlidesList</h2>
    <div className='SlidesListGrid'>
      {props.slides.map((slide,idx)=>{
        console.warn("here")
        return <div key={idx} className='SlidesListGridElement'>
          <SlideThumbnail slide={slide} onClick={()=>props.setSelectedSlide(slide)}/>
        </div>
      })}
    </div>
  </div>
}
const mapStateToProps = state => {
  return {
    slides : state.Slides,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setSelectedSlide : ( clicked:Slide, slides:Slide[])=>{
      dispatch({
        type        : Actions.OPEN_SLIDE,
        slideNumber : slides.indexOf(clicked),
      })
    },
  }
}
const mergeProps = (SP, DP, ownProps) => {
  return {
    ...SP,
    ...DP,
    setSelectedSlide : (slide:Slide)=>DP.setSelectedSlide(slide, SP.slides),
    ...ownProps,
  }
}
const SlidesList =  connect(mapStateToProps, mapDispatchToProps, mergeProps)(SlidesList_dumb)
export default SlidesList
