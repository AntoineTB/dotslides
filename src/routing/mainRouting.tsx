import * as React                    from "react"
import {connect}                     from "react-redux"
import {withRouter}                  from "react-router"
import {renderToStaticMarkup}        from "react-dom/server"
import {withLocalize}                from "react-localize-redux"
import {HashRouter, Route, Redirect} from "react-router-dom"
import {RouteProps, Switch}          from "react-router-dom"

const mapping = [
  {key :"/slides", path:"/slides", render:()=><h1>Hello World!</h1>},
  {key :"/params", path:"/params", render:()=><h1>Your settings</h1>,}
]

const MainRouting = props => {
  return (
    <HashRouter>
      <Switch>
        {mapping.map((route)=>
          <Route key={route.key} path={route.path} render={route.render}/>
        )}
        <Redirect from="/" to={"/slides"}/>
      </Switch>
    </HashRouter>
  )
}
export default withRouter(MainRouting)
