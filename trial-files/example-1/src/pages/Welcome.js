import React from "react";
import { Link } from "react-router-dom";
import { useHome } from "../providers/HomeProvider";

export const Welcome = () => {
  const { name } = useHome();
  return (
    <div>
      <h2>Welcome to my webpage {name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat
        dolore velit porro cumque repellat enim aliquam accusamus nostrum,
        deserunt illum vitae temporibus debitis repellendus excepturi quae
        voluptate laboriosam pariatur
      </p>
      {/* <Link to="/">Home</Link> */}
    </div>
  );
};
