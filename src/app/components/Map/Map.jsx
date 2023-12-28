'use client'
import React from 'react'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import { createContext } from 'react'
const Map = ({locations}) => {
  return (
   <MapContainer center={[51.505,-0.09]} zoom={13} style={{height:'400px',width:'100%'}}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations.map((location, index) => (
        <Marker key={index} position={[location.latitude, location.longitude]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
   </MapContainer>
  )
}

export default Map
