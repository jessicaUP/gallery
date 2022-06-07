import React, { useState } from "react";
import { createClient } from 'pexels';

import PhotoTile from "./photoTile";


export default function SearchPhotos() {
  const [ typed, setTyped ] = useState('');
  const [ query, setQuery ] = useState("cats");
  const [ photos, setPhotos ] = useState([]);
  const [ pageNum, setPageNum ] = useState(1);

  const client = createClient('563492ad6f91700001000001166f44fea82146a5ad74cdf9f30f0569');

  async function fetchPhotos() {
    client.photos.search({ query, page: pageNum, per_page: 10 }).then(photos => {
      setPhotos(photos.photos);
    });
    // const fullResponse = await fetch(`https://api.pexels.com/v1/search/?page=${pageNum}&per_page=10&query=${query}`);
    // const responseJson = await fullResponse.json();

    // console.log(fullResponse, responseJson);
    // setPhotos(responseJson.photos);
  }

  React.useEffect(() => {
    fetchPhotos();
    console.log(photos)

  }, [ query, pageNum ]);

  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(typed);
  }

  const photoList = photos.map((photo) => <PhotoTile key={photo.id} photo={photo} /> )

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
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
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