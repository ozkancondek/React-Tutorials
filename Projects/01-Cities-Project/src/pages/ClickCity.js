import React from "react";
import { useParams } from "react-router-dom";
import { useOut } from "../providers/OuterProvider";

import "./pages.css";

export const ClickCity = () => {
  const params = useParams();
  const { data } = useOut();
  const filteredCity = data.find((c) => c.id === +params.cityid);
  console.log(filteredCity);

  return (
    <div>
      <div className="showcard">
        <div className="showtitle">
          <h2>{filteredCity.title}</h2>
        </div>
        <img src={filteredCity.image} alt={filteredCity.title}></img>

        <div className="showcard-over">
          <p>{filteredCity.decs}</p>
        </div>
      </div>
      ozkan
    </div>
  );
};
