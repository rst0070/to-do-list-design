import ReactDOM from "react-dom";

import List from "./List";
import Navbar from "./Navbar";
import Menu from "./Menu";
/*
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);*/
let navbar = Navbar();
let menu = Menu();
let list = List("study", 0);
ReactDOM.render(navbar, document.getElementById("navbar_container"));
ReactDOM.render(menu, document.getElementById("menu_container"));
ReactDOM.render(list, document.getElementById("list_container"));
