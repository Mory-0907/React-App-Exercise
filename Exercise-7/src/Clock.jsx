import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  return <h2>{time}</h2>;
};

export default Clock;
