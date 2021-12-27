import React from "react";
import { Carousel } from "react-bootstrap";
import { useOut } from "../../providers/MainProvider";

import PropTypes from "prop-types";
const Slider = () => {
  const { data } = useOut();

  const slide = (city) => {
    return (
      <Carousel.Item interval={5000} key={city.id}>
        <img
          style={{ height: "95vh" }}
          className="d-block w-100"
          src={city.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{city.title}</h3>
          <p>{city.desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };
  return (
    <div>
      <Carousel fade>{data.map(slide)}</Carousel>
    </div>
  );
};

export default Slider;

Slider.protoTypes = {
  data: PropTypes.object.isRequired,
  slide: PropTypes.func.isRequired,
};
