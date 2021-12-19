import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
export const NavContext = createContext();

export const useSearch = () => {
  const myData = useContext(NavContext);
  if (!myData) {
    throw new Error("useSearch need to used in NavbarProvider");
  }
  return myData;
};

export const NavbarProvider = ({ children }) => {
  const [val, setVal] = useState("");

  return (
    <NavContext.Provider value={{ val, setVal }}>
      {children}
    </NavContext.Provider>
  );
};

NavbarProvider.protoTypes = {
  val: PropTypes.string.isRequired,
  setVal: PropTypes.object.isRequired,
};

/*  const { name } = useSearch(); */
