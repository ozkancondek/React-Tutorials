import React from "react";
import "../components/cards/Cards.css";
import { Card } from "../components/cards/Card";

import { useOut } from "../providers/MainProvider";
import PropTypes from "prop-types";

export const YourChoices = () => {
  const { favList, data } = useOut();

  const favCities = data
    .filter((card) => favList.includes(card.id))
    .map((card) => {
      return (
        <Card
          isFavorite={favList.includes(card.id)}
          card={card}
          key={data.id}
          id={card.id}
        />
      );
    });

  return (
    <div>
      <div className="card-container">{favCities}</div>
    </div>
  );
};

YourChoices.propTypes = {
  favList: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};
