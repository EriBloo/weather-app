import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/PositionSearch.scss';

function PositionSearch() {
  const [loc, setLoc] = useState([]);
  const history = useHistory();

  function setCurrentLoc(location) {
    setLoc([location.coords.latitude.toFixed(2), location.coords.longitude.toFixed(2)]);
  }

  function getCurrentLoc() {
    navigator.geolocation.getCurrentPosition(setCurrentLoc);
  }

  useEffect(() => {
    if (loc[0] && loc[1]) {
      history.push({
        pathname: `/${loc[0]},${loc[1]}`,
        state: {
          lat: loc[0],
          lon: loc[1],
          name: 'at your location',
        },
      });
    }
  }, [loc]);

  return (
    <div className="position-wrapper">
      <i className="fas fa-map-marker-alt" onClick={getCurrentLoc} />
    </div>
  );
}

export default PositionSearch;
