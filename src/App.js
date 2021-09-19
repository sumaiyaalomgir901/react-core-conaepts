import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setC] = useState(0);
  const handle = () => {
    const newC = count + 1;
    setC(newC);
  };
  const handledec = () => {
    const newdecrease = count - 1;
    setC(newdecrease);
  };
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button className="btn" onClick={handle}>
        Increase
      </button>
      <button onClick={handledec}>Decrease</button>
    </div>
  );
}

export default App;
