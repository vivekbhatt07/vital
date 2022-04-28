import React from "react";
import Vital from "../Assets/vital-logo.svg";
export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <img className="header__img" src={Vital} width="50px" alt="logo" />
        <span className="header__name">VITAL</span>
      </div>

      <h1 className="header__head">search by categories</h1>
      <div className="header__search">
        <div className="header__name">
          <span className="header__nameText">Name</span>
          <input
            className="header__nameInput"
            placeholder="Enter your name"
          ></input>
        </div>

        <div className="header__type">
          <span className="header__typeText">Type</span>
          <input
            className="header__typeInput"
            placeholder="Select type"
          ></input>
        </div>

        <div className="header__category">
          <span className="header__categoryText">Category</span>
          <input
            className="header__categoryInput"
            placeholder="Select type"
          ></input>
        </div>
        <button className="header__btn header__btn--color">Search</button>
      </div>
    </header>
  );
}
