import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Counter App</h1>

        <p className="count">
          Count: <span>{count}</span>
        </p>

        <div className="buttons">
          <button className="btn btn-decrement" onClick={handleDecrement}>
            -
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-increment" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
