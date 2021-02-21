// import library from node_modules
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const App = () => {
  return <div>Hi There!!!</div>;
};

// for hot reload
if (module.hot) {
  module.hot.accept();
}

// show component on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
