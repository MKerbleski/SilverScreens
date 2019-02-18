import React, { Component } from 'react';
import styled from 'styled-components'
import { Route, withRouter } from "react-router-dom";

import { MovieLarge, ListOfMovies, Header,LetterBoxString } from './components/index';
import { line } from './style/sharedStyles'

class App extends Component {
    render() {
        return (
            <AppDiv>
                <div>
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
                </div>
                <footer> 
                    <div className="left">
                        <a  rel="noopener noreferrer"
                            target="_blank" 
                            href="https://github.com/MKerbleski/SilverScreens">
                            <LetterBoxString icon fontA="fab fa-github" />
                        </a>
                        <a href="http://mikerble.ski">
                            <LetterBoxString static word="Made" />
                            <LetterBoxString static word="by:" />
                            <LetterBoxString static word="Mike" />
                        </a>
                    </div>
                    <a href="https://www.themoviedb.org/">
                        <LetterBoxString static word="Movies" />
                        <LetterBoxString static word="API:" />
                        <LetterBoxString static word="TheMovieDB" />
                    </a>
                </footer>
            </AppDiv>
        )
    }
}

export default withRouter(App)

const AppDiv = styled.div`
    /* border: 1px solid blue; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
    padding: 0;
    margin: 0 50px;
    max-width: 2000px;
    min-height: 100vh;
    min-width: 75vw;
    footer {
        ${line()};
        margin-bottom: 3px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .left{
            /* border: 1px solid green; */
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
        a {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    }
`