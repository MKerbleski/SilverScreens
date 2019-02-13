import React, { Component } from 'react';
import ListOfMovies from './components/listOfMovies'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <AppDiv>
          <h1>Silver Screens</h1>
          <ListOfMovies />
      </AppDiv>
    );
  }
}

export default App;

const AppDiv = styled.div`
  border: 0.1px solid silver;
  box-sizing: border-box;
  background: silver;
  height: auto;
  margin: 0;
  padding: 0;
`