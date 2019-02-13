import React, { Component } from 'react';
import ListOfMovies from './components/listOfMovies'
import styled from 'styled-components'
import { connect } from 'react-redux';
import MovieLarge from './components/MovieLarge'
import { Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
          <AppDiv>
              <h1>Silver Screens</h1>
              <Route path="/" exact component={ListOfMovies} />
              {/* {this.props.store.movieList ? 
                        this.props.store.movieList.map(movie => {
                            return ( */}
                              <Route path={`/:id`} component={MovieLarge}
                               />
                                {/* )
                        }) : null} */}
          </AppDiv>
        );
    }
}
const mapStateToProps = store => {
  return { store: store };
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

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