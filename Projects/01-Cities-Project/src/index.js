import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { OuterProvider } from "./providers/OuterProvider";
import { NavbarProvider } from "./providers/NavbarProvider";

ReactDOM.render(
  <BrowserRouter>
    <OuterProvider>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </OuterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
