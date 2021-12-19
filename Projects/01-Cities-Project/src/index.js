import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { OuterProvider } from "./providers/OuterProvider";

ReactDOM.render(
  <BrowserRouter>
    <OuterProvider>
      <App />
    </OuterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
