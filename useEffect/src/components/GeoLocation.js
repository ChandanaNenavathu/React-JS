import React, { useState, useEffect } from 'react'

function GeoLocation() {
    const [location, setLocation] = useState(null);
    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            });
        }
    })

  return (
    <div>
        <br />
      {location ? (
        <div>
            latitude: {location.latitude} <br />
            longitude: {location.longitude}
        </div>
      ) : (
        <div>
            Loading Location...
        </div>
      )
      }
    </div>
  )
}

export default GeoLocation
