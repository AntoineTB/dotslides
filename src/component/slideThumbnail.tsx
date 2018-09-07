import * as React            from 'react'
import Slide                 from '../model/slide'
import DotSlide              from '../model/dotSlide'
import DotSlideThumbnail     from './dotSlideThumbnail'

interface SlideThumbnailProps{
  slide : Slide
  onClick ?: ()=>void
  selected ?: boolean
}

const SlideThumbnail:React.SFC<SlideThumbnailProps> = (props:SlideThumbnailProps) => {
  const shownClass = props.slide.shown ? "shown_slide" : "hidden_slide"
  const selectedClass = props.selected ? "selected_slide" : ""
  return (
    <div className={"SlideThumbnail "+shownClass+" "+selectedClass} onClick={props.onClick}>
      <div className='overlay'></div>
      <div>{
        props.slide.hasOwnProperty("dotString")
        ? <DotSlideThumbnail slide={props.slide as DotSlide}/>
        : "MDSlideViewer"

      }</div>
    </div>
  )
}
SlideThumbnail.defaultProps = {
  onClick : ()=>{},
  selected : false,
}

export default SlideThumbnail
