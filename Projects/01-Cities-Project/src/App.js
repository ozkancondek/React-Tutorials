import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/navbar/Nav";

import { ClickCity } from "./pages/ClickCity";
import { Home } from "./pages/Home";
import { YourChoices } from "./pages/YourChoices";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourchoices" element={<YourChoices />} />
        <Route path="/blog" element={<ClickCity />} />
        <Route path="/:clickcity/:cityid" element={<ClickCity />} />
      </Routes>
    </div>
  );
};

export { App };
