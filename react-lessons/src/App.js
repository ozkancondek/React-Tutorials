import "./App.css";
import { CustomHook } from "./hooks/CustomHook";
import { UseEffect } from "./hooks/UseEffect";

function App() {
  return (
    <div className="App">
      <UseEffect />
      <CustomHook />
    </div>
  );
}

export default App;
