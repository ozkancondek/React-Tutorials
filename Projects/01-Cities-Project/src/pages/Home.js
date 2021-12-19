import React from "react";

import { Cards } from "../components/cards/Cards";
import { Footer } from "../components/footer/Footer";
import { Nav } from "../components/navbar/Nav";
import { NavbarProvider } from "../providers/NavbarProvider";

export const Home = () => {
  return (
    <div>
      <NavbarProvider>
        <Nav />
        <Cards />
      </NavbarProvider>
      <Footer />
    </div>
  );
};
