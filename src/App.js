import './App.css';
import React from 'react';

import SearchPhotos from './components/searchPhotos';
// import { withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchPhotos />
        <a className="pexel-logo" href="https://www.pexels.com" target="_blank" >
          <img className="pexel-img" src="https://images.pexels.com/lib/api/pexels.png" />
        </a>
      </div>
    </div>
  );
}

// export default withRouter(App);
export default App;
