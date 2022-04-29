import React from "react";
import headerText from "../Assets/header-text.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__img" src={headerText} alt="text" />
    </header>
  );
}
