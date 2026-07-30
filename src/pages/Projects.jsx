import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const fetchRepos = () => {

};

  useEffect(() => {
  setTimeout(() => {
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
  }, 3000); // 3 seconds
}, []);

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <input
  type="text"
  placeholder="Search repository..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

      {repos
  .filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {repo.html_url}
          </a>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Projects;