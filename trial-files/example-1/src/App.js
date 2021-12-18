import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Activities } from "./pages/Activities";
import { Contact } from "./pages/Contact";
import { Welcome } from "./pages/Welcome";
import { HomeProvider } from "./providers/HomeProvider";

function App() {
  return (
    <HomeProvider className="App">
      <h1>This is Home Page</h1>

      <MainHeader />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activity" element={<Activities />} />
        <Route path="/param/:id" element={<BlogPost />} />
      </Routes>
    </HomeProvider>
  );
}

export default App;

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/welcome">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/activity">Activity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function BlogPost() {
  let { id } = useParams();
  return <div style={{ fontSize: "50px" }}>Now showing post {id}</div>;
}
