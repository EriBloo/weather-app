import '../styles/Panel.scss';

function CurrentPanel(props) {
  return (
    <div className="panel-wrapper">
      <div className="panel current">
        <h2 className="description">
          {'Current weather in '}
          {props.city}
        </h2>
        <span className="column-wrapper">
          <img src={props.weather.condition.icon} alt="" />
          <p className="condition">{props.weather.condition.text}</p>
        </span>
        <span className="row-wrapper">
          <p className="temp">
            {'temperature: '}
            {props.weather.temp_c}
            <span>&#176;</span>
            {'C (feels like '}
            {props.weather.feelslike_c}
            <span>&#176;</span>
            {'C)'}
          </p>
        </span>
        <span className="row-wrapper">
          <p className="wind">
            {'wind speed: '}
            {props.weather.wind_kph}
            {' km/h (with gusts up to '}
            {props.weather.gust_kph}
            {' km/h)'}
          </p>
        </span>
        <span className="row-wrapper">
          <p className="precipitation">
            {'precipitation: '}
            {props.weather.precip_mm}
            {' mm'}
          </p>
        </span>
        <span className="row-wrapper">
          <p className="humidity">
            {'humidity: '}
            {props.weather.humidity}
            {'%'}
          </p>
        </span>
      </div>
    </div>
  );
}

export default CurrentPanel;
