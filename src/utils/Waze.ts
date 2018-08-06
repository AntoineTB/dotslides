import AxiosWrapper from "./AxiosWrapper"

export default class Waze extends AxiosWrapper {
  protected static getApiUrl(){
    return 'https://misc-dealerbreacher.com/waze/index.php'
  }
}
