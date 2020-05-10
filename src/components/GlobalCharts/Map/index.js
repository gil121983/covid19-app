import React, { useState, useEffect } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import styles from "./Map.module.css";
import RadioButtonCheckedTwoToneIcon from "@material-ui/icons/RadioButtonCheckedTwoTone";
import { fetchMapData } from "../../../api";
import CountUp from "react-countup";

const MAPBOX_TOKEN = "pk.eyJ1IjoiZ2lsc3RvIiwiYSI6ImNrOWZuM3BldTBkMGczb283Zzk2ejN5dGIifQ.3nQhzJkUGDQw8vcE03_6xQ";

export default function Map() {
  const [mapData, setMapData] = useState([]);
  const [hover, setHover] = useState(null);
  const [selected, setSelected] = useState(null);
  const [viewport, setViewport] = useState({
    center: [0, 20],
    minZoom: 1,
    bearing: 0,
    pitch: 0,
  });

  useEffect(() => {
    const fetchAPI = async () => {
      setMapData(await fetchMapData());
    };
    fetchAPI();
    
    
  }, []);

  useEffect(()=>console.log(mapData))
  return (
    <div 
     className={styles.mapContainer}
    >
      <MapGL
        {...viewport}
        width="100%"
        height="75vh"
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onClick={() => {
          setSelected(null);
        }}
      >
        {mapData.map((item, i) => {
          const opacity = item.stats.confirmed > 2000 ? 0.6 : 1;
        return(
          <Marker
            key={i}
            longitude={parseFloat(item.coordinates.longitude)}
            latitude={parseFloat(item.coordinates.latitude)}
          >
            <RadioButtonCheckedTwoToneIcon
              className="markerIcon"
              style={{
                color: `rgb(255,0,0)`,
                opacity: `${opacity}`,
                fontSize: `${ hover === item || selected === item ? `2rem` : "1rem" }`,
                transition: "0.3s ease",
              }}
              onClick={(e) => {
                e.preventDefault();
                setSelected(item);
              }}
              onMouseEnter={() => setHover(item)}
              onMouseLeave={() => setHover(null)}
            />
          </Marker>
        )})}
        {selected ? (
          <Popup
            latitude={parseFloat(selected.coordinates.latitude)}
            longitude={parseFloat(selected.coordinates.longitude)}
            onClose={() => {
              setSelected(null);
            }}
          >
            <h3>
              {selected.province ? selected.province : null} {selected.country}
            </h3>
            <p>
              Infected :{" "}
              <CountUp
                start={0}
                end={selected.stats.confirmed}
                duration={1}
                separator=","
              />
            </p>
            <p>
              Recovered :{" "}
              <CountUp
                start={0}
                end={selected.stats.recovered}
                duration={1}
                separator=","
              />
            </p>
            <p>
              Deaths :{" "}
              <CountUp
                start={0}
                end={selected.stats.deaths}
                duration={1}
                separator=","
              />
            </p>
            <hr />
            <p>Last updated:</p> <p>{selected.updatedAt}</p>
          </Popup>
        ) : null}
      </MapGL>
    </div>
  );
}
