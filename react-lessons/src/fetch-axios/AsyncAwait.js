import React from "react";
import "../../src/App.css";
import axios from "axios";
export const AsyncAwait = () => {
  const getMyData = new Promise((resolve, reject) => {
    const isData = false;
    if (isData) {
      resolve("i have data");
    } else {
      reject("data refused");
    }
  });

  getMyData
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  //with axios
  //option one is .then,.catch

  //   const showPeru = () =>
  //     axios
  //       .get("https://restcountries.com/v3.1/name/peru")
  //       .then((response) => console.log(response.data))
  //       .catch((error) => console.log(error));

  //but you can also use async await, instead then,cattch
  const showPeru = async () => {
    const peru = await axios.get("https://restcountries.com/v3.1/name/peru");
    console.log(peru);
  };

  showPeru();

  return (
    <div className="content">
      <h3>AsyncAwait-Promises</h3>
    </div>
  );
};
