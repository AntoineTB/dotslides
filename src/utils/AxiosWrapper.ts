import axios       from "axios"
import {stringify} from "querystring"

interface action{
  type:string
}
export default class Authentification {
  protected static getApiUrl(){return ""}
  public static getAll(options:any[]){
    return Promise.all(options.map(option => {
      return axios.get(this.getApiUrl(),{params:option.payload})
        .then(
          response => option.onResult(response.data),
          error    => option.onError(error)
        )
    }))
  }
  public static postAll(options:any[]){
    return Promise.all(options.map(option => {
      return axios.post(this.getApiUrl(),{params:option.payload})
        .then(
          response => option.onResult(response.data),
          error    => option.onError(error)
        )
    }))
  }
  public static get(options:any, onResult:(data)=>void, onError:(error)=>any):any{
    return axios.get(this.getApiUrl(),{params:options})
      .then(
        response => onResult(response.data),
        error    => onError(error)
      )
  }
  public static post(options:any, onResult:(data)=>void, onError:(error)=>void){
    return axios.post(this.getApiUrl(),stringify(options))
      .then(
        response => onResult(response.data),
        error    => onError(error)
      )
  }
}
