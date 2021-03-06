import React, { useEffect, useState } from "react";
import "../../src/App.css";
import { useInput } from "./useInput";
import { useLocalStorage } from "./useLocalStorage";

//I can use hook in hook
//if i use a custom hook in a component twice, i use two different state piece
export const CustomHook = () => {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [email, setEmail] = useState("");

  // iwant to use just one state to all inputs

  //   const [inputs, setInputs] = useState({ name: "", age: "", email: "" });

  //statefull logig, for all inputs
  //   const handleChange = (e) => {
  //     setInputs({ ...inputs, [e.target.name]: e.target.value }); // find with name and change it with value
  //     // [e.target.name] because its key in object
  //   };

  const initialState = { name: "", age: "", email: "" };
  const [storage, updateStorage] = useLocalStorage("inputs", initialState);

  //use custom hook here get first initial state or from local storage
  const [inputs, handleChange] = useInput(storage);

  //save input object to local storage  but first tuen it to string format

  useEffect(() => {
    updateStorage(inputs);
  }, [inputs]);
  return (
    <div className="content">
      <h2>custom hook example</h2>

      <label htmlFor="name">
        Name: <input name="name" value={inputs.name} onChange={handleChange} />
      </label>
      <label htmlFor="age">
        Age: <input name="age" value={inputs.age} onChange={handleChange} />
      </label>
      <label htmlFor="email">
        Email:{" "}
        <input name="email" value={inputs.email} onChange={handleChange} />
      </label>
    </div>
  );
};
