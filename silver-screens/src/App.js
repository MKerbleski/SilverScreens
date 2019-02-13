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
  /* border: 0.1px solid red; */
  max-width: 100%;
  box-sizing: border-box;
  background: #711324;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  margin: 0;
  padding: 0;
`