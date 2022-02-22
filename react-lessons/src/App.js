import { GetData } from "./fetch-axios/GetData";
import { CustomHook } from "./hooks/CustomHook";
import { UseEffect } from "./hooks/UseEffect";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ES6 } from "./ES6/ES";
import { Reducer } from "./reducer/Reducer";
import { AsyncAwait } from "./fetch-axios/AsyncAwait";
// import TodoList from "./redux/components/TodoList";
// import TodoInput from "./redux/components/TodoInput";

function App() {
  return (
    <div className="App">
      <UseEffect />
      <CustomHook />
      <GetData />
      <ES6 />
      <Reducer />
      <AsyncAwait />
    </div>
  );
}

export default App;

//  <div className="container">

//       <div className="row">
//         <div className="col-10 mx-auto col-md-8 mt-4">
//           {/* <h1 className="text-capitalize text-center">Kelvin Todo List</h1> */}
//           <TodoInput />
//           <TodoList />
//         </div>
//       </div>
//     </div>
