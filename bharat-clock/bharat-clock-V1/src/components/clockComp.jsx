import { useState, useEffect } from "react";
const ClockComp = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <center>
      <h2>This is the current time: {time.toLocaleDateString()}-{time.toLocaleTimeString()}</h2>
    </center>
  )
}
export default ClockComp;