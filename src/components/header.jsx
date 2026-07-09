function Header({ name, themeColor }) {
  return (
    <header style={{ color: themeColor }}>
      <h1>{name}</h1>
      <p>Pankti Halatwala</p>
<p>B.Tech Information Technology Student</p>
    </header>
  );
}

export default Header;