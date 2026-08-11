import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchRepos = () => {
    setLoading(true);
    setError(null);

    fetch("https://api.github.com/users/panktihalatwala/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return res.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} onRetry={fetchRepos} />;

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <span className="eyebrow">GitHub</span>
      <div className="section-heading">
        <h2>Projects</h2>
      </div>

      <input
        type="text"
        placeholder="Search repository..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: "24px" }}
      />

      {filteredRepos.length === 0 ? (
        <p>No repositories match your search.</p>
      ) : (
        <div className="card-grid">
          {filteredRepos.map((repo) => (
            <div className="card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  View on GitHub →
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;