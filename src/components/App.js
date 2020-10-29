import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import WeatherPage from './WeatherPage';
import '../styles/App.scss';

function App() {
  const [units, setUnits] = useState('metric');

  // eslint-disable-next-line no-unused-vars
  function toggleUnits() {
    const newUnits = units === 'metric' ? 'imperial' : 'metric';
    setUnits(newUnits);
  }

  return (
    <div className="app">
      <Router>
        <nav className="nav">
          <SearchBar />
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
