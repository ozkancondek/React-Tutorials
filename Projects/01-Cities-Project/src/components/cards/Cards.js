import React from "react";
import { Card } from "./Card";
//import css file
import "./Cards.css";
//call object elements from App.js with object destructuring
export const Cards = ({ setFavList, data, favList, val }) => {
  return (
    <div className="card-container">
      {/*  use Card compenent for each element of the data object */}
      {data
        .filter((card) => card.title.toLowerCase().includes(val.toLowerCase()))
        .map((card) => {
          return (
            /*  send to Card data of  the Cards components */
            <Card
              isFavorite={favList.includes(
                card.id
              )} /* check if the id key of card exist in local storage */
              setFavList={setFavList}
              card={card}
              key={data.id}
              id={card.id} /* call id key of the card with id unique name */
            />
          );
        })}
    </div>
  );
};
