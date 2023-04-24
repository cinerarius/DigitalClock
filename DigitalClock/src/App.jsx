import "./App.css";
import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  let displayHour = 0;
  let displayMin = 0;
  let displaySec = 0;
  let session = 0;
  let hour = time.getHours();
  if (hour < 9) displayHour = `0${hour}`;
  else displayHour = hour;
  if (hour >= 12) session = "PM";
  else session = "AM";
  let min = time.getMinutes();
  if (min < 9) displayMin = `0${min}`;
  else displayMin = min;
  let sec = time.getSeconds();
  if (sec < 9) displaySec = `0${sec}`;
  else displaySec = sec;
  let showTime = `${displayHour}:${displayMin}:${displaySec} ${session}`;
  return <h1>{showTime}</h1>;
}

export default Clock;
