import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();

    onSearch(query);
    setQuery("");
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        name="location"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="enter city or zip code"
      />
      <button onClick={submit}>Search</button>
    </div>
  );
}

export default Search;
