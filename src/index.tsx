import * as React                 from "react"
import * as ReactDOM              from "react-dom"
import {Provider, connect}        from "react-redux"
import {HashRouter}               from "react-router-dom"
import {LocalizeProvider}         from "react-localize-redux"
import {store}                    from "./reducers/generic/buildStore"
import MainRouting                from "./routing/mainRouting"
import ScreenSize                 from "./component/ScreenSize"


ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider>
      <ScreenSize/>
      <HashRouter>
        <MainRouting/>
      </HashRouter>
    </LocalizeProvider>
  </Provider>,
  document.getElementById("main")
)

