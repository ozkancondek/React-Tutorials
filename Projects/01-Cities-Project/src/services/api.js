import axios from "axios";
import PropTypes from "prop-types";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  /* timeout:"10000" wait for 10 sec */
});

export const fetchData = async (id) => {
  let res = await axios("https://jsonplaceholder.typicode.com/todos/" + id);

  return res.data;
};
export const fetchData2 = async () => {
  let res = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });
  return res.data;
};

const fetchData3 = async () => {
  try {
    let res = await Api({
      url: "/todos/1",
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const initialServices = {
  fetchData,
  fetchData2,
  fetchData3,
};

initialServices.propTypes = {
  fetchData: PropTypes.func.isRequired,
  fetchData2: PropTypes.func.isRequired,
  fetchData3: PropTypes.func.isRequired,
};
