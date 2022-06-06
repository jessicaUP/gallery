import './App.css';
import React from 'react';
// import { createClient } from 'pexels';
import SearchPhotos from './components/searchPhotos';

// const client = createClient('563492ad6f91700001000001166f44fea82146a5ad74cdf9f30f0569');

// // All requests made with the client will be authenticated


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">GALLERY</h1>
        <SearchPhotos />
      </div>
    </div>
  );
}

export default App;
