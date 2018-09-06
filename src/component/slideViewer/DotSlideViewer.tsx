import * as React          from 'react'
import * as d3             from 'd3'
import * as d3Graphviz     from 'd3-graphviz'
import {connect}           from 'react-redux'
import Slide               from '../../model/slide'
import DotSlide            from '../../model/dotSlide'

interface DotSlideViewerProps{
  slide : DotSlide
}
interface DotSlideViewerState{
  uniqueid : string
  renderer : undefined|d3Graphviz.graphviz
  rendererReady : boolean
}

export class DotSlideViewer_dumb extends React.Component<DotSlideViewerProps,DotSlideViewerState>{

  constructor(props:DotSlideViewerProps){
    super(props)
    this.state = {
      uniqueid : (""+Math.random()).replace(".",""),
      renderer : undefined,
      rendererReady : false,
    }
    this.renderGraph = this.renderGraph.bind(this)
  }
  render(){
    const className = 'dot_slide_view_port'
    return <div className='DotSlideViewer'>
      <div className={className}></div>
    </div>
  }
  renderGraph(){
    if(!this.state.rendererReady){return}
      console.log("rendering")
      console.warn(this.props.slide.dotString)
      this.state.renderer.renderDot(this.props.slide.dotString)
  }
  componentDidMount(){
    if(this.state.rendererReady===false){
      var renderer = d3.select(".dot_slide_view_port").graphviz()
      this.setState({renderer:renderer})
      renderer = renderer.transition(()=>{
        return d3
          .transition("main")
          .ease(d3.easeLinear)
          .delay(100)
          .duration(400)
        })
        .logEvents(true)
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
