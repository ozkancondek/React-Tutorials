import { Card } from "./Card";
import PropTypes from "prop-types";
//import css file
import "./Cards.css";

import { useSearch } from "../../providers/SearchProvider";
import { useOut } from "../../providers/MainProvider";
import { Col, Container, Row } from "react-bootstrap";
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
    <Container className="text-center mt-4 height:500px">
      <Row className="d-flex justify-content-center">{filteredData}</Row>
    </Container>
  );
};

Cards.propTypes = {
  val: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  setFavList: PropTypes.func.isRequired,
  favList: PropTypes.array.isRequired,
};
