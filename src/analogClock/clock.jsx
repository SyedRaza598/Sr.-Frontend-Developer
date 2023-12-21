import React, { useEffect, useState } from "react";

const Clock = () => {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const time = new Date();

  const updateTime = () => {
    if (time.getHours() !== hours) setHours(time.getHours());
    if (time.getMinutes() !== minutes) setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());
  };
  useEffect(() => {
    setInterval(() => updateTime(), 1000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <div className="clock">
      <div>
        <p>{hours}</p>
      </div>
      <div>
        <p>{minutes}</p>
      </div>
      <div>
        <p>{seconds}</p>
      </div>
    </div>
  );
};

export default Clock;
