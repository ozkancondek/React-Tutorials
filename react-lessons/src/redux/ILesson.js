// import logo from "./logo.svg";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";

// const updateName = (val) => {
//   return { type: "ozkan", payload: val };
// };
// const updateNameAsync = (val) => {
//   //const res=await Promise.resolve("hiii")
//   return async (dispatch) => {
//     const res = await Promise.resolve("atttt");
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//       method: "GET",
//     }).then((res) => res.json());
//     dispatch({ type: "ozkan", payload: data });
//   };
// };
// const updateNameAsync2 = (val) => async (dispatch) => {
//   //const res=await Promise.resolve("hiii")
//   const res = await Promise.resolve("atttt");
//   dispatch({ type: "ozkan", payload: res });
// };

// export const getAge = (state) => state.age;

// function App() {
//   const dispatch = useDispatch();
//   const { age } = useSelector(getAge);

//   return (
//     <div className="App">
//       <button onClick={() => dispatch(updateNameAsync("todododod"))}>
//         Dispatch
//       </button>
//     </div>
//   );
// }

// export default App;

// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";

// const reducer = (state = { name: "", age: 29 }, action) => {
//   console.log("action", action, state);
//   if (action.type === "ozkan") {
//     return { ...state, name: action.payload };
//   }
//   return state;
// };

// export const store = createStore(reducer, applyMiddleware(thunk));
