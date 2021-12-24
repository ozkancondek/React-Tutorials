import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";
import PropTypes from "prop-types";

const OuterContext = createContext();

export const MainProvider = (props) => {
  const [isAuthenticated, setIsAutenticated] = useState(true);

  const [favList, setFavList] = useState([]);
  const localData = () => {
    const response = localStorage.getItem("localData");
    if (!response) {
      return;
    }
    setFavList(JSON.parse(response));
  };

  useEffect(() => {
    localData();
  }, []);

  return (
    <OuterContext.Provider
      value={{
        isAuthenticated,
        setIsAutenticated,
        data,
        favList,
        setFavList,
        localData,
      }}
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

MainProvider.protoTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  favList: PropTypes.array.isRequired,
  setFavList: PropTypes.object.isRequired,
  localData: PropTypes.object.isRequired,
};
