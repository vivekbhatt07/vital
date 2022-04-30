import React from "react";
import Box from "./Box";
import headerText from "../Assets/header-text.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__contentWrapper">
        <img className="header__img" src={headerText} alt="text" />
      </div>
      <Box />
    </header>
  );
}
