import MapSearch from './MapSearch';
import PositionSearch from './PositionSearch';
import '../styles/LocationSearch.scss';

function LocationSearch() {
  return (
    <div className="location-wrapper">
      <MapSearch />
      <PositionSearch />
    </div>
  );
}

export default LocationSearch;
