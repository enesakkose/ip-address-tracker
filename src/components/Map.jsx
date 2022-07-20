import React from 'react'
import GoogleMapReact from 'google-map-react';
import Location from '../assets/images/icon-location.svg'


const AnyReactComponent = ({ icon }) => <div>
  <img src={icon} alt="" />
</div>;

function Map({ipData}) {
  
  const API_KEY = import.meta.env.VITE_REACT_APP_MAP_API_KEY

  const center = {
  lat: ipData?.location?.lat || 38.123,
  lng: ipData?.location?.lng || 7.123
  };  


  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={center}
        defaultZoom={14}
      >
        <AnyReactComponent
          lat={center.lat}
          lng={center.lng}
          icon={Location}
        />
      </GoogleMapReact>
  </div>
  )
}

export default Map