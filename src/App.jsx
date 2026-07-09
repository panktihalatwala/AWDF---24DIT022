import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";

function App() {

  const skills = [
    "JavaScript",
    "Python",
    "Django",
    "React",
    "HTML",
    "CSS"
  ];

  return (
    <div>

      <Navbar activeSection="Home" />

      <Header
        name="Pankti Halatwala"
        themeColor="darkblue"
      />

      <About />

      <Skills skillList={skills} />

      <Footer />

    </div>
  );
}

export default App;