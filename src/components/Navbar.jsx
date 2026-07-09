function Navbar({ activeSection }) {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          listStyle: "none",
          padding: "15px",
          margin: 0,
        }}
      >
        <li
          style={{
            color: activeSection === "Home" ? "blue" : "white",
            fontWeight: activeSection === "Home" ? "bold" : "normal",
          }}
        >
          Home
        </li>

        <li
          style={{
            color: activeSection === "About" ? "blue" : "white",
            fontWeight: activeSection === "About" ? "bold" : "normal",
          }}
        >
          About
        </li>

        <li
          style={{
            color: activeSection === "Skills" ? "blue" : "white",
            fontWeight: activeSection === "Skills" ? "bold" : "normal",
          }}
        >
          Skills
        </li>

        <li
          style={{
            color: activeSection === "Contact" ? "blue" : "white",
            fontWeight: activeSection === "Contact" ? "bold" : "normal",
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;