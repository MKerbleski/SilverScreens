import React , { Component } from 'react'
import styled from 'styled-components'

import Search from './Search'
import Nav from './Nav'
import { connect } from 'react-redux';

// import { 
//     requireUpdate
// } from '../actions'
import { Link } from "react-router-dom";
import LetterBoxString from './LetterBoxString';

const catagories = [
    {'url':'now_playing',
    'name': 'Now Playing'}, 
    {'url':'popular',
    'name': 'Popular'}, 
    {'url':'top_rated',
    'name': 'Top Rated'}, 
]

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <HeaderDiv> 
                <Link to='/' className="line">
                    <h1>Silver Screens</h1>
                </Link> 
                {this.props.store.movieDetails ? 
                    <Link className="line" to='/'>back</Link> :
                        <>{catagories.map(catagory => {
                            return <div className="line">
                            {catagory.name.split(' ').map(word => {
                                return <LetterBoxString
                                        highlight={this.props.store.catagory === catagory.url}
                                        key={word} 
                                        word={word}
                                        url={`/sort/${catagory.url}`}
                                        />
                            })}
                            
                            </div>
                        })}</>
                }
                <div className="line">
                    <Search />
                </div>
                <div className="line">
                    <Nav />
                </div>
            </HeaderDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

// const mapDispatchToProps = {
//     requireUpdate
// }

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