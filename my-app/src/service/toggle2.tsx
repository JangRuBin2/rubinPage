import '../style/toggle.css';
function Toggle() {
  return (
    <>
      <input type="checkbox" id="toggle" hidden />
      <label htmlFor="toggle" className="toggleSwitch">
        <span className="toggleButton" />
      </label>
    </>
  );
}

export default Toggle;