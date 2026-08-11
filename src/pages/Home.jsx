const skills = [
  { name: "React", level: 85, icon: "code" },
  { name: "JavaScript", level: 80, icon: "js" },
  { name: "Python", level: 78, icon: "python" },
  { name: "Django", level: 65, icon: "django" },
  { name: "Express", level: 75, icon: "server" },
  { name: "MongoDB", level: 65, icon: "database" },
  { name: "CSS", level: 82, icon: "css" },
  { name: "Bootstrap", level: 70, icon: "bootstrap" },
];

const icons = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  server: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="7" rx="1" />
      <rect x="2" y="14" width="20" height="7" rx="1" />
      <circle cx="6" cy="6.5" r="1" fill="currentColor" />
      <circle cx="6" cy="17.5" r="1" fill="currentColor" />
    </svg>
  ),
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
  js: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9v7.5a1.5 1.5 0 0 1-3 0" />
      <path d="M14 9v5.5a1.5 1.5 0 0 0 3 1.5c0-1-1-1.3-1.8-1.7" />
    </svg>
  ),
  python: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3c-3 0-5 1-5 3v3h5v1H5c-2 0-3 1.5-3 4s1 4 3 4h2v-3c0-2 1-3 3-3h4c2 0 3-1 3-3V6c0-2-2-3-5-3z" />
      <path d="M12 21c3 0 5-1 5-3v-3h-5v-1h7c2 0 3-1.5 3-4s-1-4-3-4h-2v3c0 2-1 3-3 3H10c-2 0-3 1-3 3v3c0 2 2 3 5 3z" />
      <circle cx="9" cy="5.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="18.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  django: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 3h4v13a5 5 0 0 1-5 5" />
      <path d="M9 9h4" />
      <circle cx="16.5" cy="5.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  css: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 3 1.5 17L12 22l5.5-2L19 3H5z" />
      <path d="M9 8h6l-.3 3H9.4l.2 2h5.2l-.4 4-2.4.8-2.4-.8-.15-1.5" />
    </svg>
  ),
  bootstrap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h4.5a2.25 2.25 0 0 1 0 4.5H9V7z" />
      <path d="M9 11.5h5a2.25 2.25 0 0 1 0 4.5H9v-4.5z" />
    </svg>
  ),
};

function DevGraphic() {
  return (
    <svg viewBox="0 0 400 400" width="100%" style={{ maxWidth: 380 }}>
      {/* Background circle */}
      <circle cx="200" cy="205" r="150" fill="var(--purple-light)" />
      <circle cx="200" cy="205" r="150" fill="none" stroke="var(--purple)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />

      {/* Laptop screen */}
      <rect x="95" y="110" width="210" height="140" rx="10" fill="var(--ink)" />
      <rect x="105" y="120" width="190" height="120" rx="4" fill="#1D2333" />

      {/* Code lines on screen */}
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

      {/* Laptop base */}
      <path d="M85 250 L315 250 L300 268 L100 268 Z" fill="#2B3040" />
      <rect x="150" y="266" width="100" height="4" rx="2" fill="#1D2333" />

      {/* Floating decorative dots */}
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
        <div>
          <span className="eyebrow">Portfolio · IT Student</span>
          <h1>
            Hi, I'm <span>Pankti</span>
          </h1>
          <div className="hero-role">Full-Stack Developer</div>
          <p>
            I build web applications with React on the front end and
            Express, MongoDB on the back — from component architecture
            to REST APIs.
          </p>
          <div className="hero-cta">
            <button>View Projects</button>
            <button className="btn-outline">Get In Touch</button>
          </div>
          <div className="social-row">
            <a className="social-icon" href="https://github.com/panktihalatwala" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a className="social-icon" href="mailto:example@email.com" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </a>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DevGraphic />
        </div>
      </section>

      <div className="section-heading">
        <span className="eyebrow">Capabilities</span>
        <h2>Skills</h2>
      </div>
      <div className="card-grid">
        {skills.map((s) => (
          <div className="card" key={s.name}>
            <div className="card-icon">{icons[s.icon]}</div>
            <h3>{s.name}</h3>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;