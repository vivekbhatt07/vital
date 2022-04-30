import React from "react";
import Vital from "../Assets/vital-logo.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img className="nav__img" src={Vital} alt="logo" />
        <span className="nav__name">vital</span>
      </div>
    </nav>
  );
}
