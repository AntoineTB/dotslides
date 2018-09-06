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
    console.log(d3) // d3 object, no graphviz key
    console.log(d3.graphviz) // undefined
    console.log(d3Graphviz.graphviz) // object, contains a function named graphviz
    setTimeout(
      ()=>{
        d3.graphviz(".dot_view_port").renderDot("digraph{a->b}") // TypeError : d3.graphviz is not a function
        d3Graphviz.graphviz(".dot_view_port").renderDot("digraph{a->b}") // Cannot call a class as a function (worker.onmessage @ d3-graphviz.js:1178)
      },500
    )
  }
  componentDidMount(){this.renderGraph()}
}
export default DotViewer
