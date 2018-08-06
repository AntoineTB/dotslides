import * as React from 'react'
import {connect}  from 'react-redux'
import ScreenSize from '../action/ScreenSize'
import Actions    from "../model/actions"


const mapStateToProps = (state)=>{return {}}
const mapDispatchToProps = (dispatch)=>{
  return {
    pingScreenSize : ()=>dispatch(ScreenSize())
  }
}
class dumb extends React.Component<any,any>{
  public constructor(props){
    super(props)
    this.pingResize = this.pingResize.bind(this)
  }
  public pingResize(){this.props.pingScreenSize()}
  public render(){return <div></div>}
  public componentDidMount(){window.addEventListener("resize",this.pingResize)}
  public componentWillUnmount(){window.removeEventListener("resize",this.pingResize)}
}
const ScreenSizeWatcher = connect(mapStateToProps,mapDispatchToProps)(dumb)

export default ScreenSizeWatcher
