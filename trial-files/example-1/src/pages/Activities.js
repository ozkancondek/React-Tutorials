import React from "react";
import { Link } from "react-router-dom";

export const Activities = () => {
  return (
    <section>
      <h1>The Activities Page</h1>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link to="/activity/p1">A Book</Link>
        </li>
        <li>
          <Link to="/activity/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/activity/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};
