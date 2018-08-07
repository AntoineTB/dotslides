import * as React       from 'react'
import {connect}        from 'react-redux'
import SlidesList       from '../component/slidesList'
import Slide            from '../model/slide'

interface SlidesProps{
  slides: Slide[]
}

export const Slides_dumb = (props:SlidesProps)=> {
  return <div className='Slides'>
    <div className='SlidesListContainer'><SlidesList/></div>
    <div className='SlideContainer'>eorhyolite</div>
  </div>
}

const mapStateToProps = state=>{
  return {
    slides : state.Slides
  }
}
const Slides = connect(mapStateToProps)(Slides_dumb)

export default Slides
