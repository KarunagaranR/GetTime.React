import React, { useState } from "react";

// var ti = new Date().toLocaleTimeString();

// const [time, settTime] = useState();

// function getTime() {
//   settTime(ti);
// }

function App() {
  var ti = new Date().toLocaleTimeString();

  const [time, setT] = useState(ti);
  setInterval(getTim, 1000);

  function getTim() {
    setT(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTim}>Get Time</button>
    </div>
  );
}

export default App;
