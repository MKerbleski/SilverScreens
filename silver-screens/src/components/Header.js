import React , { Component } from 'react'
import styled from 'styled-components'

import Search from './Search'
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
                <Link to='/' className="line"><h1>Silver Screens</h1></Link> 
                {this.props.store.movieDetails ? 
                    <Link className="line" to='/'>back</Link> :
                        <>{catagories.map(catagory => {
                            return <LetterBoxString
                                        highlight={this.props.store.catagory === catagory.url}
                                        key={catagory.name} 
                                        word={catagory.name}
                                        className="line"
                                        url={`/sort/${catagory.url}`}
                                        />
                        })}</>
                }
                <Search className='line' />
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
    .line {
        text-decoration: none;
        width: 100%;
        /* border: 1px solid green; */
        /* border-bottom: 1px solid black; */
        border-top: 1px solid black;
        font-family: 'Staatliches';
        word-spacing: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* background: green; */
        a {
            text-decoration: none;
        }
    }
        h1 {
            font-size: 5vw;
            font-family: marqueeregular, Arial, Helvetica, sans-serif;
            color: black;
            background: white;
            width: 100%;
            margin: 0;
        }
`