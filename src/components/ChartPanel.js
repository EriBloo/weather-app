import { useState, useEffect } from 'react';
import Charts from './Charts';
import '../styles/Panel.scss';

function ChartPanel(props) {
  const [chart, setChart] = useState('temp');
  const [active, setActive] = useState(null);

  function changeActive(target) {
    // changes element with class 'active'
    active.classList.toggle('active');
    target.classList.toggle('active');
    setActive(target);
  }

  function changeChart({ target }) {
    changeActive(target);
    setChart(target.getAttribute('data'));
  }

  useEffect(() => {
    // sets current element with class 'active' to variable
    setActive(document.querySelector('.active'));
  }, []);

  return (
    <div className="panel-wrapper large">
      <div className="panel">
        <div className="choose-chart">
          <button type="button" onClick={changeChart} data="temp" className="active">Temp</button>
          <button type="button" onClick={changeChart} data="rain">Rain</button>
          <button type="button" onClick={changeChart} data="wind">Wind</button>
        </div>
        <Charts chart={chart} weather={props.weather} />
      </div>
    </div>
  );
}

export default ChartPanel;
