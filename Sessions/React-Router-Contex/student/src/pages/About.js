import React from "react";
import { useParams } from "react-router-dom";

export const About = () => {
  const params = useParams();
  return (
    <div>
      <h1>About Us</h1>
      <p>Contact with us</p>
      <p>{params.number}</p>
    </div>
  );
};
