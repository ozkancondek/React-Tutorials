import { createContext, useContext, useMemo } from "react";

export const HomeContext = createContext();

export const useHome = () => {
  const ctx = useContext(HomeContext);
  if (!ctx) {
    throw new Error("useHome need used in HomeProvider");
  }
  return ctx;
};

export const HomeProvider = ({ children }) => {
  const values = useMemo(
    () => ({
      name: "ozkan",
      surname: "condek",
      age: 25,
    }),
    []
  );
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};
/* 
export const Ozkan = () => {
  const ctx = useHome()

  return <div></div>;
};

export const Ozkan2 = () => {
  return (
    <div>
      <HomeProvider>
        <Ozkan />
      </HomeProvider>
    </div>
  );
}; */
