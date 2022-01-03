import styled from "styled-components";
/* 
export const EntranceHeader = styled.h1`
  font-family: "Licorice", cursive;

  font-size: 7rem;
  font-weight: bold;
`; */

export const BackgroundContainer1 = styled.div`
  background-image: url(${(props) => props.img});

  min-height: 95vh;
  color: black;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 0.9;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding: 40px;
  flex-wrap: wrap;
`;

/* export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30vh;
`; */

/* export const TwoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`; */

export const TextContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.8;
  align-items: flex-end;
  border-right: 4px solid;
  border-bottom: 4px solid;
  padding: 10px;
  > * {
    font-size: 3rem;
    font-family: "Playfair Display", serif;
  }
`;

/* export const EntranceHeader2 = styled.h4`
  font-family: "Licorice", cursive;
  font-size: 5rem;

  text-decoration: underline;
`;

//font-family: "Playfair Display", serif;

//  @media (max-width: 560px) {
//     font-size: 1rem;
//   }

/* 
  &:hover {
    color: red;
  } */
