import * as React                 from "react"
import * as ReactDOM              from "react-dom"
import {Provider, connect}        from "react-redux"
import {HashRouter}               from "react-router-dom"
import {LocalizeProvider}         from "react-localize-redux"
import {store}                    from "./reducers/generic/buildStore"
import MainRouting                from "./routing/mainRouting"
import ScreenSize                 from "./component/ScreenSize"
import Header                     from "./component/header"
import * as d3Graphviz            from 'd3-graphviz'

const _ = d3Graphviz.graphviz //Preload d3Graphiz so it register itself in d3 as a plugin

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider>
      <ScreenSize/>
      <Header/>
      <HashRouter>
        <MainRouting/>
      </HashRouter>
    </LocalizeProvider>
  </Provider>,
  document.getElementById("main")
)

