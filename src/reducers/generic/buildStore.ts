import {allReducers}                 from "./reducerAssembly"
import {logger}                      from "../../middleware/logger"
import Actions                       from "../../model/actions"
import Thunk                         from "redux-thunk"
import {createStore,applyMiddleware} from 'redux'

export const store = createStore(allReducers, applyMiddleware(Thunk,logger))
