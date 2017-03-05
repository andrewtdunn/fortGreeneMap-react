import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

const Map = ({locations, selectedLocation, onSelectLocation=f=>f }) => {

    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

    const markers = locations.map((location,i) => {
      const marker = {
        position: {
          lat: location.position.lat,
          lng: location.position.lng
        },
        icon: "/assets/img/marker_icons/" + location.icon,
        id: location.id,
        animation: (location.id == selectedLocation) ?  google.maps.Animation.BOUNCE : ""
      }
      return <Marker key={i} {...marker} onClick={() => onSelectLocation(marker.id)}/>
    })

    const center = (selectedLocation == 0) ?
      {lat:40.688885, lng:-73.977042}:
      (locations.filter(location => location.id == selectedLocation))[0].position

    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            zoom={16}
            center={center}
            mapTypeId='satellite'>
            {markers}
          </GoogleMap>
        } />
    )
  }

export default Map
