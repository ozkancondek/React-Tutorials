import PropTypes from "prop-types";
//import css file
import "./Cards.css";
import { MdOutlineFavorite } from "react-icons/md";
import { useOut } from "../../providers/OuterProvider";

import { Link, useNavigate } from "react-router-dom";

//call object elements from Cards.js with object destructuring
export const Card = ({ card, id, isFavorite }) => {
  const navigate = useNavigate();

  const { setFavList } = useOut();
  // onclick event by like icon, this function gonna run
  const changeColor = (e) => {
    e.stopPropagation();

    //i can modify the favList only with setFavList function. It was state in App.js
    setFavList((prev) => {
      //takes previous array as argument
      if (prev.includes(id)) {
        //When i clicked, check if the id of card exist in favlist
        const filteredArray = prev.filter((favId) => favId !== id); //if there is, remove it from favList
        localStorage.setItem("localData", JSON.stringify(filteredArray)); //then send to local
        return filteredArray;
      } else {
        localStorage.setItem("localData", JSON.stringify([...prev, id])); // if there is not, add it to favList
        return [...prev, id];
      }
    });
  };

  return (
    <div
      className="cards"
      onClick={() => {
        navigate("/clickcity/" + id);
      }}
    >
      <div className="title">
        <MdOutlineFavorite
          className="favoriteIcon"
          onClick={changeColor}
          /*   if the id of the card in favList(isFavorite), that means the icon clicked  and red color */
          style={{ color: isFavorite ? "red" : "white" }}
        />

        <h2>{card.title}</h2>
      </div>
      <Link to="/city">
        <img src={card.image} alt={card.title}></img>
      </Link>

      <div className="card-over">
        <p>{card.desc}</p>
      </div>
    </div>
  );
};

Card.protoTypes = {
  isFavorite: PropTypes.bool.isRequired,

  setFavList: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
