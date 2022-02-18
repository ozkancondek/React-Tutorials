import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialValue;
  });
  const updateStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, updateStorage];
};
