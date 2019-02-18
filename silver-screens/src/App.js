import React, { Component } from 'react';
import styled from 'styled-components'
import { Route, withRouter } from "react-router-dom";

import { MovieLarge, Nav, ListOfMovies, Header,LetterBoxString } from './components/index';
import { line } from './style/sharedStyles'
import { connect } from 'react-redux';

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
                {this.props.store.movieDetails 
                    ?   null 
                    :   this.props.store.movieList && this.props.store.movieList.length === 0 
                        ?   null 
                        :   <div className="bottomNav">
                                <Nav />
                            </div>}
                <footer className="bottomNav"> 
                    <div className="left">
                        <a  rel="noopener noreferrer"
                            target="_blank" 
                            href="https://github.com/MKerbleski/SilverScreens">
                            <LetterBoxString justIcon fontA="fab fa-github" />
                        </a>
                        <a href="http://mikerble.ski">
                            <LetterBoxString static word="Mike" />
                        </a>
                    </div>
                    <div className="right">
                        <a href="https://www.themoviedb.org/">
                            <LetterBoxString static word="API:TheMovieDB" />
                        </a>
                    </div>
                </footer>
            </AppDiv>
        )
    }
}
const mapStateToProps = store => {
    return { store: store };
}
export default withRouter(connect(mapStateToProps)(App))

const AppDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
    padding: 0;
    max-width: 2000px;
    min-height: 100vh;
    min-width: 75vw;
    width: 90vw;
    overflow: auto;
    .bottomNav {
        ${line()};
        width: 80%;
    }
    footer {
        margin-bottom: 3px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80%;
        .left, .right {
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
        @media (max-width: 500px) {
            flex-direction: column;
            .left, .right {
                ${line()}; 
            }
        }
        @media (min-width: 500px) {
            ${line()};
        }
    }
`