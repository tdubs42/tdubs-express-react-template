import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav id="mainNav" className="navComponent">
      <NavLink to="/">Landing</NavLink>
      <NavLink to="/theApi">View Data</NavLink>
    </nav>
  );
};

export default MainNav;
