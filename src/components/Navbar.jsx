import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/tasks", label: "Tasks" },
];

function Navbar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDark]);

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
        <button
          onClick={() => setIsDark(!isDark)}
          className="btn-outline"
          style={{ padding: "8px 14px", fontSize: "0.8rem" }}
          aria-label="Toggle dark mode"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
        <Link to="/contact">
          <button className="nav-cta">Contact</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;