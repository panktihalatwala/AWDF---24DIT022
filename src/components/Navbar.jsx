import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/tasks", label: "Tasks" },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="nav-brand">
        Pankti<span>.</span>
      </div>
      <div className="nav-links">
        {links.map((l) => (
          <Link
            key={l.path}
            to={l.path}
            className={`nav-link ${location.pathname === l.path ? "active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
        <Link to="/contact">
          <button className="nav-cta">Contact</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;