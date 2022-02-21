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

  //console.log(sum(2, 5));
  function sum(a, b) {
    return a + b;
  }

  //i am gonna get an error with arrow function statement
  //ReferenceError: Cannot access 'divide' before initialization

  // console.log(divide(8, 2));

  const divide = (a, b) => a / b;

  //spread operator

  let user2 = {
    name: "ozkan",
    city: "weimar",
    age: 45,
    hobbies: ["diving", "drawing"],
  };
  //we dont use this method in react when we modify the state
  //user2.city = "berlin"
  //but i want to change state
  user2 = {
    ...user2,
    city: "berlin",
  };
  //console.log(user2);

  const reducer = (state, action) => {
    switch (action) {
      case "ADD_HOBBY":
        return { ...state, hobbies: [...state.hobbies, "dancing"] };

      default:
        return state;
    }
  };
  //dispatch({type:"ADD_HOBBY",payload : "dancing"})

  console.log(reducer(user2, "ADD_HOBBY"));

  //actually i can also use array.push(item) method but
  // with spread operator PaymentMethodChangeEvent, i am making a new copy of current state
  // and then modifing this new copied state

  return (
    <div className="content">
      <h2>ES6</h2>
      <h3> </h3>
    </div>
  );
};
