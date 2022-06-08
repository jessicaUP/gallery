import './App.css';
import React from 'react';

import SearchPhotos from './components/searchPhotos';
// import { withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchPhotos />
      </div>
    </div>
  );
}

// export default withRouter(App);
export default App;
