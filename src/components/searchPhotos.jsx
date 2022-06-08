import React, { useState } from "react";
import { createClient } from 'pexels';

import PhotoIndex from "./photoIndex";


export default function SearchPhotos() {
  const [ typed, setTyped ] = useState('');
  const [ query, setQuery ] = useState("clouds");
  const [ photos, setPhotos ] = useState([]);
  const [ pageInfo, setPageInfo ] = useState({});
  const [ pageNum, setPageNum ] = useState(1);

  const client = createClient('563492ad6f91700001000001166f44fea82146a5ad74cdf9f30f0569');

  async function fetchPhotos() {
    client.photos.search({ query, page: pageNum, per_page: 10 }).then(photos => {
      setPhotos(photos.photos);
      let prev = -1;
      let next = -1;
      if (photos.prev_page !== undefined) prev = pageNum - 1;
      if (photos.next_page !== undefined) next = pageNum + 1;
      const info = { prev: prev, next: next };
      setPageInfo(info);
    });
  }
  console.log('check', pageInfo)

  let prevArrow = <></>;
  let nextArrow = <></>;

  if (!pageInfo.prev || pageInfo.prev < 1) {
    prevArrow = <div className="arrows" id="left-arrow" ></div>
  } else if (pageInfo.prev > 0) {
    prevArrow = <div className="arrows" id="left-arrow" onClick={(e) => setPageNum(pageInfo.prev)} > &lt; &lt; &lt; &lt; &lt; </div>
  }

  if (!pageInfo.next || pageInfo.next < 1) {
    nextArrow = <div className="arrows" id="right-arrow" ></div>
  } else if (pageInfo.next > 0) {
    nextArrow = <div className="arrows" id="right-arrow" onClick={(e) => setPageNum(pageInfo.next)} > &gt; &gt; &gt; &gt; &gt; </div>
  }

  React.useEffect(() => {
    fetchPhotos();
    console.log(photos)

  }, [ query, pageNum ]);

  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(typed);
    setPageNum(1);
  }

  return (
    <>
    <form className="form" onSubmit={searchPhotos}>
      <input
        type="text"
        name="query"
        className="input"
        placeholder="Search Photos"
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        autoFocus
      />
      <button type='submit' className="search-btn">
        Search
      </button>
    </form>

    <div className="gallery" >
      {prevArrow}
      <PhotoIndex photos={photos} /> 
      {nextArrow}
    </div>
    </>
  );
}