function Header({ name, role, tagline, themeColor }) {
  return (
    <div>
      <span className="eyebrow">Portfolio · IT Student</span>
      <h1>
        Hi, I'm <span style={{ color: themeColor }}>{name}</span>
      </h1>
      <div className="hero-role">{role}</div>
      <p>{tagline}</p>
      <div className="hero-cta">
        <button style={{ background: themeColor }}>View Projects</button>
        <button className="btn-outline" style={{ color: themeColor, borderColor: themeColor }}>
          Get In Touch
        </button>
      </div>
      <div className="social-row">
        
          className="social-icon"
          href="https://github.com/panktihalatwala"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        <a>
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
  );
}

export default Header;