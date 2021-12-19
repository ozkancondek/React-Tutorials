import React from "react";
import PropTypes from "prop-types";
import { FaPlaneDeparture } from "react-icons/fa";
import { useSearch } from "../../providers/NavbarProvider";
import "./Nav.css";
export const Nav = () => {
  //call my custom hook
  const { setVal } = useSearch();
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
          onChange={filterCity}
        ></input>
      </div>
    </div>
  );
};

Nav.protoTypes = {
  setVal: PropTypes.object.isRequired,
  filterCity: PropTypes.object.isRequired,
};
