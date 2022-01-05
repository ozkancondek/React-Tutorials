import React from "react";
import { useOut } from "../../providers/MainProvider";
import { useTheme } from "../../providers/ThemeProvider";

import "./toggle.css";

export const Toggle = () => {
  const { darkTheme, setChecked, lightTheme, setTheme, checked } = useTheme();

  const trigger = (e) => {
    setChecked(e.target.value);

    setTheme(checked ? darkTheme : lightTheme);
  };

  //test variables and change body color

  return (
    <div>
      <main>
        <input className="l" type="checkbox" onClick={trigger} />
      </main>
    </div>
  );
};
