import React from "react";
import "../components/cards/Cards.css";
import { Card } from "../components/cards/Card";

import { useOut } from "../providers/MainProvider";

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
