import React, { useState } from "react";
import { createClient } from 'pexels';
import { useNavigate } from 'react-router-dom';


import PhotoIndex from "./photoIndex";


export default function SearchPhotos() {
  // CREATE/GET url for persistence

  let url = new URL(window.location.href);
  let params = new URLSearchParams(window.location.search);
  
  const info = {
    query: params.get('query') || "clouds",
    pageNum: params.get('page') || 1
  }


  // CREATE state variables

  const [ typed, setTyped ] = useState('');
  const [ query, setQuery ] = useState(info.query);
  const [ photos, setPhotos ] = useState([]);
  const [ pageInfo, setPageInfo ] = useState({});
  const [ pageNum, setPageNum ] = useState(info.pageNum);


  // COLLECT images with pexel api

  const client = createClient('563492ad6f917000010000016bcb496808994b9ea6e4e27fa512672a');

  async function fetchPhotos() {
    client.photos.search({ query, page: pageNum, per_page: 10 }).then(photos => {
      setPhotos(photos.photos);

      let prev = -1;
      let next = -1;
  
      if (photos.prev_page !== undefined) prev = parseInt(pageNum) - 1;
      if (photos.next_page !== undefined) next = parseInt(pageNum) + 1;
      const info = { prev: prev, next: next };
      setPageInfo(info);
    });

    // UPDATE url
    const newParams = new URLSearchParams('');
    newParams.set('query', query);
    newParams.set('page', pageNum);

    window.history.pushState(null, null, `${window.location.origin}/search?${newParams.toString()}`);
  }


  // CREATE pagination arrows

  let prevArrow = <></>;
  let nextArrow = <></>;

  if (!pageInfo.prev || pageInfo.prev < 1) {
    prevArrow = <div className="arrows no-arrow" id="left-arrow" ></div>
  } else if (pageInfo.prev > 0) {
    prevArrow = <div className="arrows" id="left-arrow" onClick={(e) => setPageNum(pageInfo.prev)} ><h4 className='fixed' id="prev">&lt;</h4></div>
  }

  if (!pageInfo.next || pageInfo.next < 1) {
    nextArrow = <div className="arrows no-arrow" id="right-arrow" ></div>
  } else if (pageInfo.next > 0) {
    nextArrow = <div className="arrows" id="right-arrow" onClick={(e) => setPageNum(pageInfo.next)} ><h4 className='fixed' id="next">&gt;</h4></div>
  }

  // UPDATE photos after change

  React.useEffect(() => {
    fetchPhotos();
  }, [ query, pageNum ]);


  // UPDATE search

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
        placeholder={query}
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