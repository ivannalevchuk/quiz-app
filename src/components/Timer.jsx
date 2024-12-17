import { useEffect, useState } from "react";

function Timer({ time, onTimeEnd, mode }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    console.log("Timer component mounted");
    const timer = setTimeout(onTimeEnd, time);

    return () => {
      clearTimeout(timer);
    };
  }, [time, onTimeEnd]);

  useEffect(() => {
    console.log("Interval");
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <progress id="question-time" value={remainingTime} max={time} className= {mode} />
    </div>
  );
}

export default Timer;
