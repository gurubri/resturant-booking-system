import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
// import { usePosition } from "use-position";

export default function Map(props) {
  // const {
  //   latitude,
  //   longitude,
  //   speed,
  //   timestamp,
  //   accuracy,
  //   error,
  // } = usePosition();
  // console.log(latitude, longitude);
  const [viewport, setviewport] = useState({
    latitude: 0,
    longitude: 0,
    width: "95vw",
    height: "100vh",
    zoom: 15,
  });
  // useEffect(() => {
  //   setviewport({
  //     latitude,
  //     longitude,
  //     width: "90vw",
  //     height: "80vh",
  //     zoom: 13,
  //   });
  // }, [latitude, longitude]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        console.log(position.coords.accuracy);
        setviewport({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          width: "90vw",
          height: "100vh",
          zoom: 14,
        });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const bookNow = (info) => {
    props.history.push(`/book/id=${info}`);
  };
  return (
    <div className="map">
      {viewport.latitude !== 0 ? (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => setviewport(viewport)}
          mapStyle="mapbox://styles/brianguru/ckjzukf9i0wkl17pd5noclneb"
        >
          {props.resturants.rest
            ? props.resturants.rest.map((resturant) => (
                <Marker
                  key={resturant._id}
                  latitude={resturant.coord.lat}
                  longitude={resturant.coord.long}
                >
                  <button
                    className="marker-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      bookNow(resturant._id);
                    }}
                  >
                    <img src="/images/eat.png" alt="rest park" />
                  </button>
                  <h3>{resturant.name}</h3>
                </Marker>
              ))
            : null}
        </ReactMapGL>
      ) : null}
    </div>
  );
}
