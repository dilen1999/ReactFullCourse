import React, { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <div style={themeStyle}> {doubleNumber}</div>
    </div>
  );
}

export default App;

function slowFunction(num) {
  for (let i = 0; i < 10000000; i++) {}
  return num * 2;
}
