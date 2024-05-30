import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header>
      <nav>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Events
          </NavLink>
        </li>
      </nav>
    </header>
  );
}
export default MainNavigation;
