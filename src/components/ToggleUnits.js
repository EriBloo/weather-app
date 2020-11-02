import '../styles/ToggleUnits.scss';

function ToggleUnits(props) {
  return (
    <div className="toggle-wrapper">
      <h3>Metric</h3>
      <input type="checkbox" id="toggle" className="checkbox" />
      <label htmlFor="toggle" className="switch" onClick={props.toggleUnits} />
      <h3>Imperial</h3>
    </div>
  );
}

export default ToggleUnits;
