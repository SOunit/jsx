// import library from node_modules
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'click on me!';
}

// create react component
const App = () => {
  const style = {
    backgroundColor: 'blue',
    color: 'white',
    border: '3px solid red',
  };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input id='name' type='text' />
      <button style={style}>{getButtonText()}</button>
    </div>
  );
};

// show component on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
