import { PropTypes } from 'react'
import { Link } from 'react-router'
import LocationButton from './LocationButton'


const MapLocationsList = ({locations}) => {
    return(
      <ul>{locations.map((location, i) =>
        <LocationButton key={i} {...location} />
      )}</ul>
    )



}

export default MapLocationsList
