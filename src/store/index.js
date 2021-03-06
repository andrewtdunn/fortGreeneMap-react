import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
  let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('locations', store.getState().allLocations.length)
	result = next(action)

	let { allLocations, expandLocationDetail, selectedLocation } = store.getState()

	console.log(`

		locations: ${allLocations.length}
    expandLocationDetail: ${expandLocationDetail}
    selectedLocation: ${selectedLocation}

	`)

	console.groupEnd()

	return result
}





export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}
