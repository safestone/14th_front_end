import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const onClickButton = (value: number) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <Viewer count={count} />

      <Controller onClickButton={onClickButton} />
    </div>
  );
}

export default App;