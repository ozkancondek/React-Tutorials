import React from "react";

export const ES6 = () => {
  //shorthand property

  const name = "ozkan";
  const age = 15;
  const user = { name, age };
  console.log(user);
  //{name: 'ozkan', age: 15}

  return <div>TemplralLiterals</div>;
};
