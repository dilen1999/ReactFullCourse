import React, { useEffect, useState } from "react";

function App() {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);

  useEffect(() => {
    // setNum1(200);
    setNum1(200);
    return () => {
      setNum1(null);
    };
  }, [num1, num2]);

  console.log("num1", num1);
  console.log("num2", num2);
  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => setNum1(() => num1 + 1)}>Add</button>
      <h1>{num2}</h1>
      <button onClick={() => setNum2(() => num2 + 1)}>Add</button>
    </div>
  );
}

export default App;
