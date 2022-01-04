import React from "react";
import { useParams } from "react-router-dom";
import {
  DetailsBar,
  ImageContainer,
  TextContainer,
  TextPhotoContainer,
} from "../components/cards/CardStyles";
import { useOut } from "../providers/MainProvider";

import "./pages.css";

export const ClickCity = () => {
  const params = useParams();
  const { data } = useOut();
  const filteredCity = data.find((c) => c.id === +params.cityid);

  return (
    <div>
      <TextPhotoContainer>
        <ImageContainer img={filteredCity.image}></ImageContainer>
        <TextContainer>
          <h2>{filteredCity.title}</h2>
          <p>{filteredCity.desc}</p>
        </TextContainer>
      </TextPhotoContainer>
      <DetailsBar>ozkan</DetailsBar>
    </div>
  );
};
