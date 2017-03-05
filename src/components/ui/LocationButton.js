import { PropTypes } from 'react'

const LocationButton = ({menuLabel, id, locationType, isActive, onSelectLocation=f=>f}) => {
  const selected = (isActive)? "selected":""
  const cssClasses = `${locationType} ${selected}`
  return (
    <li onClick={() => onSelectLocation(id)} className={cssClasses}>{menuLabel}</li>
  )
}

export default LocationButton
