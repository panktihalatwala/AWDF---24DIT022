import Header from "../components/Header";
import Skills from "../components/Skills";

const skillList = [
  { name: "React", level: 85, icon: "code" },
  { name: "JavaScript", level: 80, icon: "js" },
  { name: "Python", level: 78, icon: "python" },
  { name: "Django", level: 65, icon: "django" },
  { name: "Express", level: 75, icon: "server" },
  { name: "MongoDB", level: 65, icon: "database" },
  { name: "CSS", level: 82, icon: "css" },
  { name: "Bootstrap", level: 70, icon: "bootstrap" },
];

function DevGraphic() {
  return (
    <svg viewBox="0 0 400 400" width="100%" style={{ maxWidth: 380 }}>
      <circle cx="200" cy="205" r="150" fill="var(--purple-light)" />
      <circle cx="200" cy="205" r="150" fill="none" stroke="var(--purple)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />
      <rect x="95" y="110" width="210" height="140" rx="10" fill="var(--ink)" />
      <rect x="105" y="120" width="190" height="120" rx="4" fill="#1D2333" />
      <circle cx="118" cy="132" r="3" fill="var(--danger)" opacity="0.8" />
      <circle cx="130" cy="132" r="3" fill="#E8C15A" opacity="0.8" />
      <circle cx="142" cy="132" r="3" fill="var(--success)" opacity="0.8" />
      <rect x="115" y="148" width="30" height="5" rx="2" fill="var(--purple)" />
      <rect x="149" y="148" width="50" height="5" rx="2" fill="#8A93A6" />
      <rect x="125" y="163" width="60" height="5" rx="2" fill="#8A93A6" />
      <rect x="189" y="163" width="34" height="5" rx="2" fill="#E8C15A" />
      <rect x="125" y="178" width="40" height="5" rx="2" fill="#8A93A6" />
      <rect x="169" y="178" width="55" height="5" rx="2" fill="var(--purple)" opacity="0.9" />
      <rect x="115" y="193" width="24" height="5" rx="2" fill="var(--purple)" />
      <rect x="143" y="193" width="70" height="5" rx="2" fill="#8A93A6" />
      <rect x="125" y="208" width="45" height="5" rx="2" fill="#8A93A6" />
      <rect x="174" y="208" width="30" height="5" rx="2" fill="var(--success)" opacity="0.9" />
      <rect x="115" y="223" width="20" height="5" rx="2" fill="var(--purple)" />
      <path d="M85 250 L315 250 L300 268 L100 268 Z" fill="#2B3040" />
      <rect x="150" y="266" width="100" height="4" rx="2" fill="#1D2333" />
      <circle cx="90" cy="100" r="6" fill="var(--purple)" opacity="0.5" />
      <circle cx="320" cy="300" r="8" fill="var(--purple)" opacity="0.3" />
      <circle cx="330" cy="130" r="5" fill="var(--ink)" opacity="0.15" />
    </svg>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <Header
          name="Pankti"
          role="Full-Stack Developer"
          tagline="I build web applications with React on the front end and Express, MongoDB on the back — from component architecture to REST APIs."
          themeColor="#6D5BD0"
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DevGraphic />
        </div>
      </section>

      <Skills skillList={skillList} />
    </>
  );
}

export default Home;