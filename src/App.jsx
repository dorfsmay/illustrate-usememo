import { useState, useMemo } from "react";
import "./App.css";

function slowCalculation(val) {
  // imaginary slow calculation
  const now = new Date();
  console.log(`  └ ${now.toISOString()} Slow Calculation happenning`);
  return val;
}

function App() {
  const [random, setRandom] = useState(0);
  const result = useMemo(() => slowCalculation(random), [random]);

  const handleClick = () => {
    const now = new Date();
    const random = Math.floor(Math.random() * 3);
    console.log(`${now.toISOString()}: rendering.`, "Random:", random);
    setRandom(random);
  };

  return (
    <main>
      <h1>Slow render</h1>
      <p>
        <strong>Remember to open the console.</strong>
      </p>

      <p>The number is {result}</p>
      <button onClick={() => handleClick()}>New Number</button>
    </main>
  );
}

export default App;
