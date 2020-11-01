import { format } from 'date-fns';
import '../styles/Panel.scss';

function ForecastPanel(props) {
  return (
    <div className="panel-wrapper">
      <div className="panel forecast" onClick={() => props.changeDay(props.weather.date)}>
        <h2 className="description">{format(new Date(props.weather.date), 'do MMMM')}</h2>
        <span className="column-wrapper">
          <img src={props.weather.day.condition.icon} alt="" />
          <p className="condition">{props.weather.day.condition.text}</p>
        </span>
        <span className="row-wrapper">
          <p>{'average temperature: '}</p>
          <p>
            {props.weather.day.avgtemp_c}
            <span>&#176;</span>
            {'C'}
          </p>
        </span>
        <span className="row-wrapper">
          <p>{'max wind speed: '}</p>
          <p>
            {props.weather.day.maxwind_kph}
            {' km/h'}
          </p>
        </span>
        <span className="row-wrapper">
          <p>{'total precipitation: '}</p>
          <p>
            {props.weather.day.totalprecip_mm}
            {' mm'}
          </p>
        </span>
        <span className="row-wrapper">
          <p>{'average humidity: '}</p>
          <p>
            {props.weather.day.avghumidity}
            {'%'}
          </p>
        </span>
      </div>
    </div>
  );
}

export default ForecastPanel;
