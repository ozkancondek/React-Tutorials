import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./providers/MainProvider";
import { SearchProvider } from "./providers/SearchProvider";

ReactDOM.render(
  <BrowserRouter>
    <MainProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </MainProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
