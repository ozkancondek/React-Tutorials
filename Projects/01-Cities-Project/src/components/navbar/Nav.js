import React from "react";
import PropTypes from "prop-types";
import { FaPlaneDeparture } from "react-icons/fa";
import { useSearch } from "../../providers/NavbarProvider";
import "./Nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  //call my custom hook
  const { setVal } = useSearch();
  //update cities in UI
  const filterCity = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">
            <FaPlaneDeparture />
          </Link>
        </li>
        <li>
          <Link to="/routes">Routes</Link>
        </li>
        <li>
          <Link to="/yourchoices">Your Choices</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="input-area">
          <input
            className="input"
            type="text"
            placeholder="Search for results"
            onChange={filterCity}
          ></input>
        </li>
      </ul>
    </div>
  );
};

Nav.protoTypes = {
  setVal: PropTypes.object.isRequired,
  filterCity: PropTypes.object.isRequired,
};
