import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import WeatherPage from './WeatherPage';
import ToggleUnits from './ToggleUnits';
import LocationSearch from './LocationSearch';
import '../styles/App.scss';

function App() {
  const [units, setUnits] = useState('metric');

  function toggleUnits() {
    // toggle between metric and imperial units
    const newUnits = (units === 'metric' ? 'imperial' : 'metric');
    setUnits(newUnits);
  }

  return (
    <div className="app">
      <Router>
        <nav className="nav">
          <ToggleUnits toggleUnits={toggleUnits} />
          <SearchBar />
          <LocationSearch />
        </nav>
        <Switch>
          <Route
            path="/:id"
            render={(routeProps) => (
              <WeatherPage {...routeProps} units={units} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
