import React from "react";

export default function SearchPhotos() {
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
      />
      <button type='submit' className="button">
        SEARCH
      </button>
    </form>
    </>
  );
}