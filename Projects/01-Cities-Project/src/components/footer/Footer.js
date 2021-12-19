/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import {
  FaRaspberryPi,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <FaRaspberryPi /> Blue <span>Berry</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a> - <a href="#">Blog</a> -{" "}
            <a href="#">Pricing</a> - <a href="#">Locations</a> -
            <a href="#">Faq</a> - <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">BlueBerry © 2021</p>

          <div className="footer-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p>Contact Us</p>

          <form type="submit">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};
