import "./App.css";
import { Cards } from "./components/cards/Cards";
import { Footer } from "./components/footer/Footer";

import { Nav } from "./components/navbar/Nav";

import { NavbarProvider } from "./providers/NavbarProvider";

const App = () => {
  return (
    <div className="App">
      <NavbarProvider>
        <Nav />

        <Cards />
      </NavbarProvider>
      <Footer />
    </div>
  );
};

export { App };
