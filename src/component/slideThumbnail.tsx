import * as React       from 'react'
import Slide            from '../model/slide'

interface SlideThumbnailProps{
  slide : Slide
  onClick ?: ()=>void
}

const SlideThumbnail:React.SFC<SlideThumbnailProps> = (props:SlideThumbnailProps) => {
  return <div className='SlideThumbnail' onClick={props.onClick}>
    <div>Thumb</div>
  </div>
}
SlideThumbnail.defaultProps = {
  onClick : ()=>{}
}

export default SlideThumbnail
