import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { Nav, Search, LetterBoxString } from './index';

const catagories = [
    {'url':'now_playing',
    'name': 'Now Playing'}, 
    {'url':'popular',
    'name': 'Popular'}, 
    {'url':'top_rated',
    'name': 'Top Rated'}, 
]

class Header extends Component {
    render(){
        return(
            <HeaderDiv> 
                <Link to='/' className="line">
                    <h1>Silver Screens</h1>
                </Link> 
                {this.props.store.movieDetails ? 
                    <div className="line">
                        <LetterBoxString 
                            word="Back"
                            url='/' />
                    </div> :
                    <>
                        {catagories.map(catagory => {
                            return (
                                <div className="line">
                                    {catagory.name.split(' ').map(word => {
                                        return <LetterBoxString
                                                    highlight={this.props.store.catagory === catagory.url}
                                                    key={word} 
                                                    word={word}
                                                    url={`/sort/${catagory.url}`} />
                                    })}
                                </div>)
                            })
                        }
                        <div className="line">
                            <Search />
                        </div>
                        <div className="line">
                            <Nav />
                        </div>
                    </>
                }
            </HeaderDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

export default connect(mapStateToProps)(Header);

const HeaderDiv = styled.header`
    /* border: 1px solid green; */
    /* background: white; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .hey{
        background: green;
    }
    .line {
        /* REPEAT */

        /* text-decoration: none; */
        width: 100%;
        /* border: 1px solid green; */
        /* border-bottom: 1px solid black; */
        border-top: 1px solid black;
        /* font-family: 'Staatliches'; */
        /* word-spacing: 10px; */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: white;
        /* background: green; */
        h1 {
            font-size: 5vw;
            font-family: marqueeregular, Arial, Helvetica, sans-serif;
            color: black;
            background: white;
            width: 100%;
            margin: 0;
        }
    }
    a {
        text-decoration: none;
    }
`