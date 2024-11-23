import React, { useCallback, useState } from "react";
import List from "./assets/List";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (increment) => {
      return [
        number + increment + 1,
        number + increment + 2,
        number + increment + 3,
      ];
    },
    [number]
  );

  const Theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={Theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle change</button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;
