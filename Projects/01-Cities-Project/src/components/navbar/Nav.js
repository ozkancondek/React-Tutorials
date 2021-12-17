import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import "./Nav.css";
export const Nav = ({ setVal }) => {
  //update cities in UI
  const filterCity = (e) => {
    setVal(e.target.value);
  };
  return (
    <div className="navbar">
      <a href="home">
        <FaPlaneDeparture />
      </a>
      <a href="aboutus">Route</a>
      <a href="foryou">Your Choices</a>
      <a href="services">Services</a>
      <a href="blog">Blog</a>

      <a href="contact">Contact</a>
      <div className="input-area">
        <input
          className="input"
          type="text"
          placeholder="Search for results"
          onKeyUp={filterCity}
        ></input>
      </div>
    </div>
  );
};
