import './App.css';
import React from 'react';

import SearchPhotos from './components/searchPhotos';




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
