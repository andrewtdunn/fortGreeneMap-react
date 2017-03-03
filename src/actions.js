import C from './constants'
import fetch from 'isomorphic-fetch'

export function selectLocation(id){

  return {
    type: C.SELECT_LOCATION,
    payload: id
  }
}

export function expandLocationDetail(id){

  return {
    type: C.EXPAND_LOCATION_DETAIL,
    payload: id
  }
}
