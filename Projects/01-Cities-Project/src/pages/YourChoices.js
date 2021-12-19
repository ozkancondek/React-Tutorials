import React from "react";
import "../components/cards/Cards.css";
import { Card } from "../components/cards/Card";

import { useOut } from "../providers/OuterProvider";

export const YourChoices = () => {
  const { favList, data } = useOut();

  const favCities = data
    .filter((card) => favList.includes(card.id))
    .map((card) => {
      return (
        /*  send to Card data of  the Cards components */
        <Card
          isFavorite={favList.includes(
            card.id
          )} /* check if the id key of card exist in local storage */
          card={card}
          key={data.id}
          id={card.id} /* call id key of the card with id unique name */
        />
      );
    });

  return (
    <div>
      <div className="card-container">{favCities}</div>
    </div>
  );
};
