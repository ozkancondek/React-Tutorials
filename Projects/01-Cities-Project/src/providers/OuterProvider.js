import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";
import PropTypes from "prop-types";

const OuterContext = createContext();

export const OuterProvider = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAutenticated] = useState(false);
  //assign an array to add id of liked cities
  const [favList, setFavList] = useState([]);
  const localData = () => {
    //check if is there a key in local storage with localData name
    const response = localStorage.getItem("localData");
    if (!response) {
      return;
    }
    setFavList(JSON.parse(response));
  };
  // get the data from local storage when the page reloaded
  useEffect(() => {
    localData();
  }, []);

  return (
    <OuterContext.Provider
      value={{ isAuthenticated, data, favList, setFavList, localData }}
    >
      {props.children}
    </OuterContext.Provider>
  );
};

export const useOut = () => {
  const myOutData = useContext(OuterContext);
  if (!myOutData) {
    throw new Error("useOut need to used in OuterProvider");
  }
  return myOutData;
};

OuterProvider.protoTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  favList: PropTypes.array.isRequired,
  setFavList: PropTypes.object.isRequired,
  localData: PropTypes.object.isRequired,
};
/*  const { isAuthenticated } = useOut(); */
