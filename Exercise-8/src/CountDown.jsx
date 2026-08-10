import { useState, useEffect } from "react";

export const CountDown = () => {

  const [initialTime, setInitialTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning,timeLeft]);

  const handleStart = () => {
    if(timeLeft > 0)
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

   const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setInitialTime(value);
    setTimeLeft(value);
    setIsRunning(false);
  };

  return (
    <>
    <h1>Countdown Timer</h1>
    <p>Set Time (seconds):
       <input
        type="number"
        value={initialTime}
        onChange={handleInputChange}
      />
    </p>
    <p>Time Left: {timeLeft} seconds </p>
    
      <button disabled={isRunning || timeLeft === 0} onClick={handleStart}  >
        Start
      </button>
      <button disabled={!isRunning} onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
