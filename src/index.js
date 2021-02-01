import ReactDOM from "react-dom";

import List from "./List";
import Navbar from "./Navbar";

let navbar = Navbar();
let list = List("study", 0);
ReactDOM.render(navbar, document.getElementById("navbar_container"));
ReactDOM.render(list, document.getElementById("list_container"));
