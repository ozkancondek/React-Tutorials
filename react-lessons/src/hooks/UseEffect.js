import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../src/App.css";

export const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  //useeffect hook
  //useEffect(() => console.log(counter), []); //componentDidMount, no update
  useEffect(() => console.log(counter), [counter]); //componentDidUpdate,  update in every update depends on variable in  the d. array

  return (
    <div className="content">
      <h2>useState example</h2>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={increase}>increase</button>
    </div>
  );
};
