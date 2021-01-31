import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import List from "./List";
/*
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);*/
let list = List("study", 0);
ReactDOM.render(list, document.getElementById("list_container"));
