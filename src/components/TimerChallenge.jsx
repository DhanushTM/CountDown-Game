import React, { useState, useRef } from "react";

import ResultModal from "./ResultModal";

// let timer; // 5-start 1-start 1-stop 5-stop but still lost msg , so variable can't be used
function TimerChallenge({ title, targetTime }) {
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef(); //now every instance of this component get's its own timer.
  const dialog = useRef();
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  function handleStart() {
    // setTimeout does not provide remaining time when we stop , so we use setInterval
    timer.current = setInterval(() => {
      // setTimerExpired(true);
      // dialog.current.showModal();
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      // dialog.current.open(); // becomes handy when you are working in bigger projects and with many developers working on different components
    }, 10);
    // setTimerStarted(true);
  }
  function handleStop() {
    // clearTimeout(timer.current);
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        onReset={handleReset}
        remainingTime={timeRemaining}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
