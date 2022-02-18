import React, { useEffect, useState } from "react";
import "../../src/App.css";
import axios from "axios";

export const GetData = () => {
  //i want to save reponse to state
  const [peru, setPeru] = useState([]);
  /*   useEffect(() => {
    //get response
    // catch with then and turn it to json
    //catch it again to write on console
    //for every single step, catch it with then
    fetch("https://restcountries.com/v3.1/name/peru")
      .then((response) => response.json())
      .then((response) => setPeru(response))
      .catch(error => console.log(error));
  }, []); */

  useEffect(() => {
    /*     const body = {data}
       axios.post("https://restcountries.com/v3.1/name/peru",body); */

    axios
      .get("https://restcountries.com/v3.1/name/peru")
      .then((response) => setPeru(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="content">
      <h2> Axios-Fetch</h2>

      <h3>Country Name: {peru[0].name.common}</h3>
      <h3>Capital City: {peru[0].capital}</h3>
    </div>
  );
};
