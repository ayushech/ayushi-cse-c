import React, { useState, useEffect } from "react";

function ClockApp() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-box">
      <h2>🕒 Digital Clock</h2>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default ClockApp;
