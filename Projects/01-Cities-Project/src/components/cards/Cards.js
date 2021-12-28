import { Card } from "./Card";
import PropTypes from "prop-types";

import "./Cards.css";

import { useSearch } from "../../providers/SearchProvider";
import { useOut } from "../../providers/MainProvider";
import { Container, Row } from "react-bootstrap";

export const Cards = () => {
  const { data, favList } = useOut();

  const { val } = useSearch();

  const filteredData = data
    .filter((card) => card.title.toLowerCase().includes(val.toLowerCase()))
    .map((card) => {
      return (
        <Card
          isFavorite={favList.includes(card.id)}
          card={card}
          key={card.id}
          id={card.id}
        />
      );
    });
  return (
    <Container className="text-center mt-4 height:500px">
      <Row className="d-flex justify-content-center">{filteredData}</Row>
    </Container>
  );
};
