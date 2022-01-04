import PropTypes from "prop-types";
import "./Cards.css";
import { MdOutlineFavorite } from "react-icons/md";
import { useOut } from "../../providers/MainProvider";

import { useNavigate } from "react-router-dom";
import { Button, Col } from "react-bootstrap";

export const Card = ({ card, id, isFavorite }) => {
  const navigate = useNavigate();

  const { setFavList } = useOut();

  const changeColor = (e) => {
    e.stopPropagation();

    setFavList((prev) => {
      if (prev.includes(id)) {
        const filteredArray = prev.filter((favId) => favId !== id);
        localStorage.setItem("localData", JSON.stringify(filteredArray));
        return filteredArray;
      } else {
        localStorage.setItem("localData", JSON.stringify([...prev, id]));
        return [...prev, id];
      }
    });
  };

  return (
    <Col className="mb-3 d-flex justify-content-center" xs={12} md={6} lg={4}>
      <div className="cards">
        <img src={card.image} alt={card.title}></img>

        <div className="card-over">
          <p>{card.desc}</p>
        </div>
        <div className="title">
          {/*    <MdOutlineFavorite
            className="favoriteIcon"
            onClick={changeColor}
            style={{ color: isFavorite ? "red" : "white" }}
          /> */}

          {card.title}
        </div>
        <Button
          onClick={() => {
            navigate("/clickcity/" + id);
          }}
          variant="outline-secondary"
        >
          Discover
        </Button>
      </div>
    </Col>
  );
};

Card.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  setFavList: PropTypes.array.isRequired,
  card: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
