import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  render(){
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

    const markers = this.props.locations.map((location,i) => {
      const marker = {
        position: {
          lat: location.position.lat,
          lng: location.position.lng
        }
      }
      return <Marker key={i} {...marker} />
    })

    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            defaultZoom={16}
            defaultCenter={this.props.center}
            mapTypeId='satellite'>
            {markers}
          </GoogleMap>
        } />
    )
  }
}

export default Map
