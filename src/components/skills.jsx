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

function Skills({ skillList }) {
  return (
    <>
      <div className="section-heading">
        <span className="eyebrow">Capabilities</span>
        <h2>Skills</h2>
      </div>
      <div className="card-grid">
        {skillList.map((s) => (
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

export default Skills;