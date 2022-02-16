import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../src/App.css";

export const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  //useeffect hook
  //useEffect(() => console.log(counter), []); //componentDidMount, no update
  //useEffect(() => console.log(counter), [counter]); //componentDidUpdate,  update in every update depends on variable in  the d. array

  //componentWillUnmount
  //   const [timer, setTimer] = useState(0);
  //   useEffect(() => {
  //     const myTimer = setInterval(() => {
  //       setTimer((timer) => timer + 1); // use callback function  or give timer to dependencies list
  //     }, 1000);
  //     return () => clearInterval(myTimer); //add return statement to useEffect
  //   }, []);

  return (
    <div className="content">
      <h2>useState example</h2>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={increase}>increase</button>
      <h3>Timer</h3>
      {/*   <h3>{timer}</h3> */}
    </div>
  );
};
