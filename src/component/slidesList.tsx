import * as React        from 'react'
import {connect}         from 'react-redux'
import Slide             from '../model/slide'
import Actions           from '../model/actions'
import SlideThumbnail    from './slideThumbnail'

interface SlidesListProps{
  slides : Slide[]
  setSelectedSlide : (Slide)=>void
  selectedSlide : number
}

const SlidesList_dumb:React.SFC<SlidesListProps> = (props:SlidesListProps)=>{
  return <div className='SlidesList'>
    <h2>SlidesList</h2>
    <div className='SlidesListGrid'>
      {props.slides.map((slide,idx)=>{
        return <div key={idx} className='SlidesListGridElement'>
          <SlideThumbnail slide={slide} onClick={()=>props.setSelectedSlide(slide)} selected={props.selectedSlide==idx}/>
        </div>
      })}
    </div>
  </div>
}
const mapStateToProps = state => {
  return {
    slides : state.Slides,
    selectedSlide : state.SelectedSlide,
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
