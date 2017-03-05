import { PropTypes } from 'react'
import { Link } from 'react-router'
import LocationButton from './LocationButton'


const MapLocationsList = ({locations, selectedLocation, onSelectLocation=f=>f}) => {

    return(
      <ul>{locations.map((location, i) =>
        <LocationButton key={i} {...location} isActive={location.id==selectedLocation} onSelectLocation={onSelectLocation} />
      )}</ul>
    )

}

export default MapLocationsList
