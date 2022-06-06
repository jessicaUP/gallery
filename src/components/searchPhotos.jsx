import React, { useState } from "react";

export default function SearchPhotos() {
  const [ query, setQuery ] = useState("")

  console.log(query);
  
  return (
    <>
    <h1>SEARCH TEST</h1>
    <form action="">
      <label htmlFor="query">SEARCH</label>
      <input
        type="text"
        name="query"
        className="input"
        placeholder="Search Photos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit' className="button">
        SEARCH
      </button>
    </form>
    </>
  );
}