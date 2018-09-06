import * as React       from 'react'
import {connect}        from 'react-redux'
import Slide            from '../../model/slide'
import DotSlide         from '../../model/dotSlide'
import {DotSlideViewer_dumb as DotSlideViewer} from './DotSlideViewer'
import DotViewer        from './DotViewer'

interface SlideViewerProps{
    slide : Slide
}

export const SlideViewer_dumb = (props:SlideViewerProps)=> {
  return <div className='SlideViewer'>
    {/*props.slide.hasOwnProperty("dotString") ? <DotSlideViewer slide={props.slide as DotSlide}/> : "MDSlideViewer" */ }
    <DotViewer/>
  </div>
}

const mapStateToProps = state => {
  return {
    slide : state.Slides[state.SelectedSlide]
  }
}
const SlideViewer = connect(mapStateToProps)(SlideViewer_dumb)

export default SlideViewer
