import React, { Component } from 'react';
import './App.css';
import ListOfMovies from './components/listOfMovies'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Silver Screens</h1>
          <ListOfMovies></ListOfMovies>
      </div>
    );
  }
}

export default App;
