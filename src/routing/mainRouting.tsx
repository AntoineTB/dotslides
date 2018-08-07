import * as React                    from "react"
import {connect}                     from "react-redux"
import {withRouter}                  from "react-router"
import {renderToStaticMarkup}        from "react-dom/server"
import {withLocalize}                from "react-localize-redux"
import {HashRouter, Route, Redirect} from "react-router-dom"
import {RouteProps, Switch}          from "react-router-dom"
import Slides                        from "../page/slides"

const mapping = [
  {key :"/slides", path:"/slides", component : Slides},
  {key :"/params", path:"/params", render : ()=><h1>Your settings</h1>,}
]

const MainRouting = props => {
  return (
    <HashRouter>
      <Switch>
        {mapping.map((route)=>
          <Route {...route} />
        )}
        <Redirect from="/" to={"/slides"}/>
      </Switch>
    </HashRouter>
  )
}
export default withRouter(MainRouting)
