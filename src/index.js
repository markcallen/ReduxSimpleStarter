import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDTfpgg7sYNWxLyi0U2acM762dSS0AhcVQ';

// Create a new component
// This component will produce some html
const App = () =>
    <div>
      <SearchBar />
    </div>
  ;

// Take this comonents generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
