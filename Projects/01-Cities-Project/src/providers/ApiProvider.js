import { createContext, useContext } from "react";
import { initialServices } from "../services/api";
import { useErrorHandler } from "react-error-boundary";
import PropTypes from "prop-types";
export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const handleError = useErrorHandler();

  const asyncWrapper = async (cb) => {
    try {
      let res = await cb();
      return res;
    } catch (error) {
      handleError(error);
    }
  };

  const getPost = async (id) => {
    let res = await asyncWrapper(() => initialServices.fetchData(id));
    return res;
  };

  return (
    <ApiContext.Provider value={{ getPost: getPost }}>
      {children}
    </ApiContext.Provider>
  );
};

//********custom hook */
//const { response } = useApi();
export const useApi = () => {
  const response = useContext(ApiContext);
  if (!response) {
    throw new Error("useApi need to used in ApiProvider");
  }
  return response;
};

ApiProvider.propTypes = {
  children: PropTypes.object.isRequired,
  asyncWrapper: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  useErrorHandler: PropTypes.func.isRequired,
};
