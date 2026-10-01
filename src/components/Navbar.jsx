
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../api";

const links = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/tasks", label: "Tasks" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => Boolean(localStorage.getItem("token"))
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDark]);

  // Update login status after navigation
  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("token")));
  }, [location.pathname]);

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    navigate("/login");
  };

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
            className={`nav-link ${
              location.pathname === l.path ? "active" : ""
            }`}
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

        {isLoggedIn ? (
          <button onClick={handleLogout} className="nav-cta">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="nav-cta">Login</button>
          </Link>
        )}

        <Link to="/contact">
          <button className="nav-cta">Contact</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;