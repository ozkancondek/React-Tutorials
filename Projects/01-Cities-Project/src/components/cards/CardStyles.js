import styled from "styled-components";

export const TextPhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
 
  justify-content: center;
  width: auto
  border: 2px solid black;
  margin: auto;
  margin-top: 50px;
  
   
`;

export const ImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 600px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
`;

export const TextContainer = styled.div`
  & > p {
    color: white;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    font-size: 1.3rem;
    line-height: 2;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  & > h2 {
    text-decoration: underline;
    color: white;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    font-size: 1.6rem;

    text-align: center;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
  background-color: #6082fe;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
`;

export const DetailsBar = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 900px;
  margin: auto;
`;
