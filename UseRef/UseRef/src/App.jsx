import React, { useEffect, useRef, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  console.log("Getting started");
  const inputRef = useRef();
  // useEffect(() => {
  //   inputRef.current = input;
  // }, [input]);
  const display = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Input</h1>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <h2>my Name is {input}</h2>
      <h2>my Name is {inputRef.current}</h2>
      <button onClick={display}>show input</button>
    </div>
  );
}

export default App;
