import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import token from '../mapboxToken';
import '../styles/MapSearch.scss';

function MapSearch() {
  mapboxgl.accessToken = token;
  const [def] = useState({
    lng: 20,
    lat: 50,
    zoom: 2,
  });
  const history = useHistory();

  function toggleVisibility() {
    const map = document.querySelector('#map');
    map.classList.toggle('visible');
  }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: document.querySelector('#map-container'),
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [def.lng, def.lat],
      zoom: def.zoom,
    });

    map.on('click', (e) => {
      const loc = e.lngLat;
      history.push({
        pathname: `/${loc.lat.toFixed(2)},${loc.lng.toFixed(2)}`,
        state: {
          lat: loc.lat.toFixed(2),
          lon: loc.lng.toFixed(2),
          name: `at ${loc.lat.toFixed(2)}, ${loc.lng.toFixed(2)}`,
        },
      });
      toggleVisibility();
    });
  }, []);

  return (
    <div className="map-wrapper">
      <div className="map" id="map">
        <div className="map-container" id="map-container" />
      </div>
      <i className="fas fa-globe-americas" onClick={toggleVisibility} />
    </div>
  );
}

export default MapSearch;
