import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "blue" : "black",
          fontWeight: isActive ? "bold" : "normal",
          marginRight: "15px",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        style={({ isActive }) => ({
          color: isActive ? "blue" : "black",
          fontWeight: isActive ? "bold" : "normal",
          marginRight: "15px",
          textDecoration: "none",
        })}
      >
        Projects
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "blue" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;