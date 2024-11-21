import React, { useState } from "react";

function App() {
  let x = 1;

  const [num, setNum] = useState(45);

  function handleAdd() {
    // x = x + 1;
    // console.log(x, "x");
    // setNum(num + 1);
    setNum((val) => {
      return val + 5;
    });
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
