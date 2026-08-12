import { useState } from "react";

export const FetchingGithubUserData = () => {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!search.trim()) return;

    setLoading(true);
    setUserData(null);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(
        `https://api.github.com/users/${search.trim()}`,
      );

      if (!response.ok) {
        throw new Error("GitHub user not found");
      }

      const data = await response.json();

      setUserData(data);
    } catch (err) {
      console.log("Error fetching data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Github User Search</h1>

      <input
        type="text"
        placeholder="Search github username"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && (
        <>
          <h3>{userData.name || userData.login}</h3>

          <img
            src={userData.avatar_url}
            alt={userData.login}
            width={100}
            style={{ borderRadius: "50%" }}
          />

          <p>Bio: {userData.bio || "No bio available"}</p>

          <p>Public Repos: {userData.public_repos}</p>
        </>
      )}
    </>
  );
};
