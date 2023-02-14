import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

function Maps() {

    const [mapLocation, setMapLocation] = useState({
        longitude: 38.78496666137071,
        latitude: 9.008168186861285
    })

    //in App.jsx calling environment variable
    console.log(import.meta.env.VITE_GITHUB_URL)
    console.log(import.meta.env.VITE_APP_MAPBOX_TOKEN)
    function handleClick(event) {
        let latitude = event.lngLat.lat;
        let longitude = event.lngLat.lng;
        setMapLocation({ longitude: longitude, latitude: latitude });
    }
    return (
        <div id="map__wrapper" style={{ marginTop: 20 }}>

            <Map className="test" onClick={handleClick}
                mapboxAccessToken={import.meta.env.VITE_APP_MAPBOX_TOKEN}
                initialViewState={{
                    longitude: mapLocation.longitude,
                    latitude: mapLocation.latitude,
                    zoom: 15
                }}

                // {...console.log(Map)}
                style={{ width: "100%", height: 200 }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                <Marker
                    longitude={mapLocation.longitude}
                    latitude={mapLocation.latitude}
                />
                <GeolocateControl

                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    onGeolocate={(position) => {
                        // get latitude and longitude of user current location
                        setMapLocation({ longitude: position.coords.latitude, latitude: position.coords.longitude });
                        console.log(mapLocation);
                    }}
                />
                <NavigationControl position="top-right" />
            </Map>
            <input type="hidden" value={mapLocation.latitude} name="latitude" />
            <input type="hidden" value={mapLocation.longitude} name="longitude" />
        </div>
    )
}

export default Maps