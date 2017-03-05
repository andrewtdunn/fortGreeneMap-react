import C from './constants'
import fetch from 'isomorphic-fetch'

export const selectLocation = function(id){

  return {
    type: C.SELECT_LOCATION,
    payload: id
  }
}

export const expandLocationDetail = function(){

  return {
    type: C.EXPAND_LOCATION_DETAIL
  }
}

export const collapseLocationDetail = function(){

  return {
    type: C.COLLAPSE_LOCATION_DETAIL
  }
}
