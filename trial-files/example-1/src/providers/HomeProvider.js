import React, { createContext, useContext, useMemo } from "react";

export const HomeContext = createContext();

export const useHome = () => {
  const myData = useContext(HomeContext);
  if (!myData) {
    throw new Error("useHome need used in HomeProvider");
  }
  return myData;
};
export const HomeProvider = ({ children }) => {
  const values = useMemo(
    () => ({
      name: "ozkan",
      surname: "condek",
      age: 25,
      weight: 83,
      height: 180,
    }),
    []
  );
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};
