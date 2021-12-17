import { NavLink } from "react-router-dom";
import { useHome } from "../providers/Homeprovider";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const { name, surname, age } = useHome();
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              {surname}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about/3507">
              d About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
