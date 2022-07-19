import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%'
};



function Map({ipData}) {
  
  const API_KEY = import.meta.env.VITE_REACT_APP_MAP_API_KEY

  const center = {
  lat: ipData?.location?.lat || 38.123,
  lng: ipData?.location?.lng || 7.123
  };  

  return (
    <div className="map">
        <LoadScript
        googleMapsApiKey={API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
         <Marker
            key='marker_2'
            position={center} 
        />
            
        
          <></>
        </GoogleMap>
      </LoadScript>
  </div>
  )
}

export default Map