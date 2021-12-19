import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cards } from "./components/cards/Cards";
import { Footer } from "./components/footer/Footer";

import { Nav } from "./components/navbar/Nav";
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";
import { YourChoices } from "./pages/YourChoices";

import { NavbarProvider } from "./providers/NavbarProvider";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourchoices" element={<YourChoices />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export { App };
