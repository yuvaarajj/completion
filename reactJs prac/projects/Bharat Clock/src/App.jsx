import "./App.css";
function Clock() {
  let time = new Date();
  return (
    <div>
      <h1>Bharat Clock</h1>
      <p>This is a clock that shows the time in Bharat at all the time.</p>
      <p>
        This is the current time: {time.toLocaleTimeString()} -{" "}
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}

export default Clock;
