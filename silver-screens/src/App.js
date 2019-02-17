import React, { Component } from 'react';
import styled from 'styled-components'

import { Route, withRouter } from "react-router-dom";
import MovieLarge from './components/MovieLarge'
import ListOfMovies from './components/listOfMovies'
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <AppDiv>
                <Header />
                <Route
                    path="/" 
                    exact
                    component={ListOfMovies} />
                <Route
                    path="/sort/:catagory" 
                    component={ListOfMovies} />
                <Route
                    path={`/movie/:id`} 
                    component={MovieLarge} />
                <Route
                    path={`/search/:params`} 
                    component={ListOfMovies} />
                <footer>
                    Made by: 
                    <a href="http://mikerble.ski">
                        Mike
                    </a>
                    Movies API: 
                    <a href="https://www.themoviedb.org/">
                        The Movie DB
                    </a>
                </footer>
            </AppDiv>
        )
    }
}



export default withRouter(App)

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