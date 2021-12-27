import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import "./App.css";
import { SignupForm } from "./compenents/SignupForm";
import { SignupForm3 } from "./compenents/SignupForm3";
import { Basic } from "./compenents/Basic";
import { Basic2 } from "./compenents/Basic2";
import * as Yup from "yup";

function App() {
  return (
    <div className="container">
      <div className="border">
        <Basic />
      </div>
      <div className="border">
        <Basic2 />
      </div>
      <div className="border">
        <SignupForm />
      </div>
      <div className="border">
        <SignupForm3 />
      </div>
    </div>
  );
}

export default App;
