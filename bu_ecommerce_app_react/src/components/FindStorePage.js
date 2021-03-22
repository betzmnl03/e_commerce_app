import React, { useState, useEffect } from "react";
import {GoogleMap, withScriptjs, withGoogleMap,Marker,InfoWindow} from "react-google-maps"
import * as storeData from "../Data/storeData.json";
require('dotenv').config()


let center


export default function FindStorePage(props) {


  center = props.center

    return (
        <div style={{
          marginLeft:"6%",
          marginRight:"4%",
            width:"100vw",
            height:"70vh",
            boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            
        }}>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
        )
}


function Map(){


  const [selectedStore, setSelectedStore] = useState(null);

  console.log(center.lat)


  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedStore(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  return (
  <GoogleMap 
  defaultZoom={13} 
  center={{lat:center.lat, lng:center.lng}}
  >

{storeData.features.map(store => (
        <Marker
          key={store.properties.STORE_ID}
          position={{
            lat: store.geometry.coordinates[1],
            lng: store.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedStore(store);
          }}
          icon={{
            url: `/store1.webp`,
            scaledSize: new window.google.maps.Size(50, 50)
          }}
        />
      ))}

    {selectedStore && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedStore(null);
          }}
          position={{
            lat: selectedStore.geometry.coordinates[1],
            lng: selectedStore.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedStore.properties.NAME}</h2>
            <p>Address: {selectedStore.properties.ADDRESS}</p>
            <p>Contact: {selectedStore.properties.CONTACT}</p>
          </div>
        </InfoWindow>
      )}
  </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

    