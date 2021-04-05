import React, { Component } from "react";

class Tokenomics extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <section id="tokenomics">
        <div className="row title">
          <h1>Tokenomics</h1>
        </div>
        <div className="row description">
          <ul>
            <li>10% a mi</li>
            <li>10% a vos</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Tokenomics;
