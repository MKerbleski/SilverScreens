import React, { Component } from 'react';
import ListOfMovies from './components/listOfMovies'
import styled from 'styled-components'
import { connect} from 'react-redux';
import MovieLarge from './components/MovieLarge'
import { Route, withRouter  } from "react-router-dom";
import { Link } from 'react-router-dom';
import Search from './components/Search'

class App extends Component {
    render() {
      console.log(this.props)
        return (
          <AppDiv>
              <header>
                  <>
                      {this.props.detailed? <Link></Link>: null}
                      <h1>Silver Screens</h1>
                  </>
                  <Search />
              </header>
              <Route
                  path="/" 
                  exact
                  render={() => <ListOfMovies />} />
              <Route
                  path={`/movie/:id`} 
                  component={MovieLarge} />
          </AppDiv>
        );
    }
}

const mapStateToProps = store => {
  return { store: store };
}

export default withRouter(connect(mapStateToProps)(App))

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
    header {
        width: 100%;
        border: 1px solid green;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`