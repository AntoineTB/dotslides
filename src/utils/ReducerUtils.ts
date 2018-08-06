export default class ReducerUtils{
	public static createReducer<stateType>(initialState:stateType, handlers) {
	  return function reducer(state:stateType = initialState, action) {
	    if (handlers.hasOwnProperty(action.type)) {
	      return handlers[action.type](state, action)
	    }
      else {
        return state
      }
	  }
	}
}
