import Slide               from '../../model/slide'
import DotSlide            from '../../model/dotSlide'
import * as React          from 'react'
import * as d3             from 'd3'
import * as d3Graphviz     from 'd3-graphviz'

export class DotViewer extends React.Component<any,any>{
  render(){
    return <div className='DotViewer'>
      <div className='dot_view_port'></div>
    </div>
  }
  renderGraph(){
    d3Graphviz.graphviz(".dot_view_port").renderDot("digraph{a->b}") // Cannot call a class as a function (worker.onmessage @ d3-graphviz.js:1178)
  }
  componentDidMount(){this.renderGraph()}
}
export default DotViewer
