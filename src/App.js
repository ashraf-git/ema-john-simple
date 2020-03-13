import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am react Lover</h1>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle = {
    border: '1px solid green',
    margin: '10px',
    padding: '4px'
  }
  return(
    <div style = {personStyle}>
      <h1>Name: Sakib Al Hasan</h1>
      <h3>Hero of the Year</h3>
    </div>
  ) 
}

export default App;
