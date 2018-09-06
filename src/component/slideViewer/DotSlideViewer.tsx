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
}

export class DotSlideViewer_dumb extends React.Component<DotSlideViewerProps,DotSlideViewerState>{

  constructor(props:DotSlideViewerProps){
    super(props)
    this.state = {
      uniqueid : (""+Math.random()).replace(".","")
    }
    this.renderGraph = this.renderGraph.bind(this)
  }

  render(){
    return <div className='DotSlideViewer'>
      <div className={'dot_slide_view_port_'+this.state.uniqueid}></div>
    </div>
  }
  renderGraph(){
    console.log(d3)
    console.log(d3.graphviz)
    console.log(d3Graphviz.graphviz)
    setTimeout(
      ()=>{
        //d3.graphviz(".dot_slide_view_port_"+this.state.uniqueid).renderDot("digraph{a->b}")
        d3Graphviz.graphviz(".dot_slide_view_port_"+this.state.uniqueid).renderDot("digraph{a->b}")
      },500
    )
  }
  componentDidMount(){this.renderGraph()}
  componentWillUpdate(){this.renderGraph()}
}

const mapStateToProps = state => {
  return {
    slide : state.Slides[state.SelectedSlide]
  }
}
const DotSlideViewer = connect(mapStateToProps)(DotSlideViewer_dumb)

export default DotSlideViewer
