import Header from "../components/header";
import About from "../components/about";
import Skills from "../components/skills";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header name="Pankti Halatwala" themeColor="blue" />
      <About />
      <Skills
        skillList={[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Python",
          "Django",
        ]}
      />
      <Footer />
    </>
  );
}

export default Home;