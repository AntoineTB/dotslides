import * as React       from 'react'
import {connect}        from 'react-redux'
import SlidesList       from '../component/slidesList'
import SlideViewer      from '../component/slideViewer'
import Slide            from '../model/slide'

interface SlidesProps{
}

export const Slides_dumb = (props:SlidesProps)=> {
  return <div className='Slides'>
    <div className='SlidesListContainer'><SlidesList/></div>
    <div className='SlideContainer'><SlideViewer/></div>
  </div>
}

const mapStateToProps = state=>{
  return {}
}
const Slides = connect(mapStateToProps)(Slides_dumb)

export default Slides
