import * as React          from 'react'
import * as d3             from 'd3'
import * as d3Graphviz     from 'd3-graphviz'
import {connect}           from 'react-redux'
import Slide               from '../../model/slide'
import DotSlide            from '../../model/dotSlide'

interface DotSlideViewerProps{
  slide : DotSlide,
}
interface DotSlideViewerState{
  uniqueid : string
  renderer : undefined|d3Graphviz.graphviz
  rendererReady : boolean
}

export class DotSlideViewer_dumb extends React.Component<DotSlideViewerProps,DotSlideViewerState>{
  static defaultProps = {
  }
  constructor(props:DotSlideViewerProps){
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
    return <div className='DotSlideViewer'>
      <div className={this.getClassName()}></div>
    </div>
  }
  getClassName() : string {return 'dot_slide_view_port'+this.state.uniqueid}
  renderGraph(){
    if(!this.state.rendererReady){return}
    const bounds = document
      .querySelectorAll("."+this.getClassName())[0]
      .getBoundingClientRect()
    const width = bounds.width
    this.state.renderer.options({
      fit:true,
      width:width,
      engine:this.props.slide.engine?this.props.slide.engine:"dot",
    })
    this.state.renderer.renderDot(this.props.slide.dotString)
  }
  componentDidMount(){
    if(this.state.rendererReady===false){
      var renderer = d3.select(".dot_slide_view_port"+this.state.uniqueid).graphviz()
      this.setState({renderer:renderer})
      renderer = renderer.transition(()=>{
        return d3
          .transition("main")
          .ease(d3.easeLinear)
          .delay(100)
          .duration(400)
      })
      //.logEvents(true)
      .on("initEnd",()=>{
        this.setState({
          rendererReady : true,
          renderer : renderer
        })
        this.renderGraph()
      })
    }
  }
  componentDidUpdate(){this.renderGraph()}
}

const mapStateToProps = state => {
  return {
    slide : state.Slides[state.SelectedSlide]
  }
}
const DotSlideViewer = connect(mapStateToProps)(DotSlideViewer_dumb)

export default DotSlideViewer
