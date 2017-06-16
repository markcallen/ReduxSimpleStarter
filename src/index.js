import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component
// This component will produce some html
const App = () => <div>Hi!</div>;

// Take this comonents generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
