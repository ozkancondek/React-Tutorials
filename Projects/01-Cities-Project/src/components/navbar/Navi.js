import React from "react";
import PropTypes from "prop-types";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../providers/SearchProvider";
import { useOut } from "../../providers/MainProvider";
import { FaRaspberryPi } from "react-icons/fa";

export const Navi = () => {
  const { setVal } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useOut();

  const filterCity = (e) => {
    setVal(e.target.value);
  };

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      onSelect={(eventKey) =>
        eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
      }
    >
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link eventKey="home">
            <FaRaspberryPi style={{ width: "40px" }} />
            BlueBerry
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link eventKey="cities">Cities</Nav.Link>
            <Nav.Link eventKey="yourchoices">Your Choices</Nav.Link>

            <Nav.Link eventKey="services">Services</Nav.Link>
            <Nav.Link eventKey="contact">Contact</Nav.Link>
          </Nav>
          <Form
            className="d-flex"
            style={{
              visibility:
                location.pathname === "/cities" ? "visible" : "hidden",
            }}
          >
            <FormControl
              onChange={filterCity}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          {isAuthenticated && <Nav.Link eventKey="login">Login</Nav.Link>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Navi.propTypes = {
  setVal: PropTypes.func.isRequired,
  filterCity: PropTypes.func.isRequired,
};
