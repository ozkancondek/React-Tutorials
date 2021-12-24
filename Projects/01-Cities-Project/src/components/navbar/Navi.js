import React from "react";
import PropTypes from "prop-types";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { FaPlaneDeparture } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../providers/SearchProvider";
import { useOut } from "../../providers/MainProvider";

export const Navi = () => {
  const { setVal } = useSearch();
  const navigate = useNavigate();
  const { isAuthenticated } = useOut();

  const filterCity = (e) => {
    setVal(e.target.value);
  };
  return (
    <Navbar
      bg="light"
      expand="lg"
      expand="lg"
      onSelect={(eventKey) =>
        eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
      }
    >
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link eventKey="home">
            <FaPlaneDeparture />
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
          <Form className="d-flex">
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

Navi.protoTypes = {
  setVal: PropTypes.object.isRequired,
  filterCity: PropTypes.object.isRequired,
};
