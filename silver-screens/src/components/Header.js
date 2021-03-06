import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { Nav, Search, LetterBoxString } from './index';
import { line } from '../style/sharedStyles'

const catagories = [
    {'url':'now_playing',
    'name': 'Now Playing'}, 
    {'url':'popular',
    'name': 'Trending'}, 
    {'url':'top_rated',
    'name': 'Top Rated'}, 
]

class Header extends Component {
    render(){
        return(
            <HeaderDiv> 
                <Link to='/'>
                    <h1>Silver Screens</h1>
                </Link> 
                <div className="marquee">
                    {this.props.store.movieDetails 
                        ?   <div className="line">
                                <LetterBoxString 
                                    word="Back"
                                    url={`/sort/${this.props.store.catagory}`} />
                            </div> 
                        :   <>
                                {catagories.map(catagory => {
                                    return (
                                        <div key={catagory.url} className="line">
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
                                <Nav />
                            </>
                    }
                </div>
            </HeaderDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

export default connect(mapStateToProps)(Header);

const HeaderDiv = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .marquee {
        width: 80%;
        border: 5px dotted yellow;
        padding: 5px;
        margin: 5px;
    }
    .line {
        ${line()}
    }
    a {
        text-decoration: none;
    }
    h1 {
        font-size: 8vw;
        font-family: marqueeregular, Arial, Helvetica, sans-serif;
        color: gold;
        width: 100%;
        margin: 0;
    }
`