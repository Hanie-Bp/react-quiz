import { useState, useEffect } from "react";

const Timer = ({ handleNext, seconds, setSeconds }) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, 0);
    const seconds = (timeInSeconds % 60).toString().padStart(2, 0);
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (seconds <= 0) {
      return handleNext();
    }
    const timer = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return <span className="text-white">{formatTime(seconds)}</span>;
};

export default Timer;
