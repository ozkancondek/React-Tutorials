import { useState } from "react";

export const useInput = () => {
  const [inputs, setInputs] = useState({ name: "", age: "", email: "" }); //give initial values
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return [inputs, handleChange]; //returns state and its function
};
