import "./App.css";
import { Cards } from "./components/cards/Cards";
import { Footer } from "./components/footer/Footer";
import { useState, useEffect } from "react";
import { Nav } from "./components/navbar/Nav";
import { data } from "./data.js";

const App = () => {
  //assign an array to add id of liked cities
  const [favList, setFavList] = useState([]);
  //assign this favorite array to local storage with localData() function
  const localData = () => {
    //check if is there a key in local storage with localData name
    const response = localStorage.getItem("localData");
    if (!response) {
      return;
    }
    setFavList(JSON.parse(response));
  };
  // get the data from local storage when the page reloaded
  useEffect(() => {
    localData();
  }, []);

  // set a value to get input value from navbar

  const [val, setVal] = useState("");

  return (
    <div className="App">
      <Nav setVal={setVal} />
      {/*   send data of the App.js in object format  to the Cards */}
      <Cards data={data} favList={favList} setFavList={setFavList} val={val} />
      <Footer />
    </div>
  );
};

export { App };
