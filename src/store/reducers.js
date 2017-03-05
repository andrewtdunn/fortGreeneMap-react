import C from '../constants'
import { combineReducers } from 'redux'

export const allLocations = (state=[], action) => {
  return state
}


export const expandLocationDetail = (state=false, action) => {

  switch(action.type){
    case C.EXPAND_LOCATION_DETAIL:
      return true
    case C.COLLAPSE_LOCATION_DETAIL:
      return false

    default:
      return state
  }

}

export const selectedLocation = (state=0, action) =>
  (action.type === C.SELECT_LOCATION) ?
		 parseInt(action.payload) :
		 state


export default combineReducers({
  allLocations,
  expandLocationDetail,
  selectedLocation

})
