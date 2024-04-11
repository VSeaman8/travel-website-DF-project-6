import { useRef, useState, useEffect } from "react";

import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const MapContainer = ({ lon, lat }) => {
  const mapElement = useRef();
  const [map, setMap] = useState({});

  // const mapLongitude = -121.91599;
  // const mapLatitude = 37.36765;
  // const mapZoom = 10;

  useEffect(() => {
    console.log("lon:", lon);
    console.log("lat:", lat);
    console.log("API key:", import.meta.env.VITE_TOMTOM_API);

    let map = tt.map({
      key: import.meta.env.VITE_TOMTOM_API,
      container: mapElement.current,
      center: [lon, lat],
      zoom: 10,
    });
    setMap(map);
    return () => map.remove();
  }, [lon, lat]);

  return <div ref={mapElement} className="mapContainer" />;
};

export default MapContainer;

/*useEffect(() => {
        let map = tt.map({
            key: "<lNk6NA97M7pAWFlpCeZQ2klCKTR2nNOn>",
            container: mapElement.current,
            center: [mapLongitude, mapLatitude],
            zoom: mapZoom,
        });
        setMap(map);
        return () => map.remove();
    }, []);

    return (
        <>
            <div
                ref={mapElement}
                className="mapDiv"
                style={{ height: "500px" }} /* This height value can be set to whatever you need} 
            />
        </>
    );
}
*/
