import "./App.css";
import { GetData } from "./fetch-axios/GetData";
import { CustomHook } from "./hooks/CustomHook";
import { UseEffect } from "./hooks/UseEffect";

function App() {
  return (
    <div className="App">
      <UseEffect />
      <CustomHook />
      <GetData />
    </div>
  );
}

export default App;
