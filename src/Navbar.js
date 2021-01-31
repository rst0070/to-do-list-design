import React from "react";
import "./navbar.css";
let Menubutton = (
  <div id="menu_button" onClick={() => {}}>
    <div></div>
  </div>
);
export default function Navbar() {
  return (
    <div id="navbar">
      {Menubutton}
      <p>study</p>
      <div id="completed_list_button"></div>
    </div>
  );
}
