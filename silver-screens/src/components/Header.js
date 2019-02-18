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
    'name': 'Popular'}, 
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .line {
        /* REPEAT */
        ${line()}
    }
    a {
        text-decoration: none;
    }
    h1 {
        font-size: 5vw;
        font-family: marqueeregular, Arial, Helvetica, sans-serif;
        color: black;
        /* background: white; */
        width: 100%;
        margin: 0;
    }
`