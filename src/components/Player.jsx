import React, { useState, useRef } from "react";

export default function Player() {
  const enteredName = useRef();
  const [playerName, setPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   setSubmitted(false); //because after once submitted it changes after every key stroke so to prevent that.(without check once)
  //   setPlayerName(e.target.value);
  // };

  const handleClick = () => {
    setPlayerName(enteredName.current.value);
    // if you want clear the input field after the click of button
    // as react is declarative approach
    enteredName.current.value = "";
    // so don't use the above approach
    // setSubmitted(true);
  };

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? playerName : "unknown entity"}</h2> */}
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={enteredName}
          type="text"
          // onChange={handleChange}
          // value={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
