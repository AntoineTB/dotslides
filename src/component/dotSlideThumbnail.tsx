import * as React          from 'react'
import * as d3             from 'd3'
import * as d3Graphviz     from 'd3-graphviz'
import {connect}           from 'react-redux'
import Slide               from '../model/slide'
import DotSlide            from '../model/dotSlide'


interface DotSlideThumbnailProps{
  slide : DotSlide,
}
interface DotSlideThumbnailState{
  uniqueid : string
  renderer : undefined|d3Graphviz.graphviz
  rendererReady : boolean
}

class DotSlideThumbnail extends React.Component<DotSlideThumbnailProps,DotSlideThumbnailState>{
  static defaultProps = {
  }
  constructor(props:DotSlideThumbnailProps){
    super(props)
    this.state = {
      uniqueid : (""+Math.random()).replace(".",""),
      renderer : undefined,
      rendererReady : false,
    }
    this.renderGraph = this.renderGraph.bind(this)
    this.getClassName = this.getClassName.bind(this)
  }
  render(){
    return <div className='DotSlideThumbnail'>
      <div>{this.props.slide.title}</div>
      <div className={this.getClassName()}></div>
    </div>
  }
  getClassName() : string {return 'dot_slide_view_port'+this.state.uniqueid}
  renderGraph(){}
  componentDidMount(){this.renderGraph()}
  componentDidUpdate(){this.renderGraph()}
}

export default DotSlideThumbnail
