import { Card } from "./Card";
import PropTypes from "prop-types";
//import css file
import "./Cards.css";

import { useSearch } from "../../providers/NavbarProvider";
import { useOut } from "../../providers/OuterProvider";
//call object elements from App.js with object destructuring

export const Cards = () => {
  const { data, favList } = useOut();

  //call my custom hook
  const { val } = useSearch();

  const filteredData = data
    .filter((card) => card.title.toLowerCase().includes(val.toLowerCase()))
    .map((card) => {
      return (
        /*  send to Card data of  the Cards components */
        <Card
          isFavorite={favList.includes(
            card.id
          )} /* check if the id key of card exist in local storage */
          card={card}
          key={card.id}
          id={card.id} /* call id key of the card with id unique name */
        />
      );
    });
  return (
    <div className="card-container">
      {/*  use Card compenent for each element of the data object */}
      {filteredData}
      {/* <Sidebar favList={favList} /> */}
    </div>
  );
};

Cards.protoTypes = {
  val: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  setFavList: PropTypes.object.isRequired,
  favList: PropTypes.array.isRequired,
};
