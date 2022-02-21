import React from "react";
import "../../src/App.css";

export const ES6 = () => {
  //shorthand property

  const name = "ozkan";
  const age = 15;
  const user = { name, age };
  //console.log(user);
  //{name: 'ozkan', age: 15}

  //arrow function

  console.log(sum(2, 5));
  function sum(a, b) {
    return a + b;
  }

  //i am gonna get an error with arrow function statement
  //ReferenceError: Cannot access 'divide' before initialization

  // console.log(divide(8, 2));

  const divide = (a, b) => a / b;

  return (
    <div className="content">
      <h2>ES6</h2>
      <h3> </h3>
    </div>
  );
};
