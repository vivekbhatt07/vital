import React from "react";

export default function Main() {
  return (
    <main className="main">
      <section className="main__about">
        <h2 className="main__head u-center-text">About us</h2>
        <p className="main__text u-center-text">
          Vital is a fully decentralized application allowing anyone to create a
          fundraising project for all types of needs:{" "}
          <strong>Wedding, birthday, retirement, medical</strong>Wedding,
          birthday, retirement, medical support or simply for{" "}
          <strong>common expenses.</strong>
        </p>
        <p className="main__text u-center-text">
          Built on the Elrond blockchain, Vital is fully governed by Smart
          Contracts that provide transparency and security for our users.Our
          business model allows us to let you spend your kitty for free by
          spending it with one of our partners or by participating in our
          staking program.
        </p>

        <button className="main__btn btn">How does this work?</button>
      </section>
    </main>
  );
}
