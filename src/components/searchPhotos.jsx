import React, { useState } from "react";
import { createClient } from 'pexels';



export default function SearchPhotos() {
  const [ query, setQuery ] = useState("")
  const [ photos, setPhotos ] = useState([])

  const client = createClient('563492ad6f91700001000001166f44fea82146a5ad74cdf9f30f0569');


  const searchPhotos = (e) => {
    e.preventDefault();
    client.photos.search({ query, per_page: 10 }).then(photos => { setPhotos(photos.photos) });

    console.log(photos)

  }
  console.log(photos)
  const photoList = photos.map((photo) =>
    <div className="tile" key={photo.id}>
      <img src={photo.src.small} alt={photo.alt} />
    </div>)

  return (
    <>
    <h1>SEARCH TEST</h1>
    <form className="form" onSubmit={searchPhotos}>
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

    <div className="photos">
      { photoList }
    </div>
    </>
  );
}