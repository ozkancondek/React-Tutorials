import React from "react";
import { useHome } from "../providers/HomeProvider";

export const Contact = () => {
  const { surname, age, height } = useHome();
  return (
    <div>
      <h2>Contact wit us</h2>
      <p>{surname}</p>
      <p>{age}</p>
      <p>{height}</p>
    </div>
  );
};
