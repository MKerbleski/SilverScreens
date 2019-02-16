import React , { Component } from 'react'
import styled from 'styled-components'

import Search from './Search'
import { connect } from 'react-redux';

// import { 
//     requireUpdate
// } from '../actions'
import { Link } from "react-router-dom";
import LetterBox from './LetterBox';

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
                <div className="catagories">
                    <Link to='/'><h1>Silver Screens</h1></Link> 
                    {this.props.store.movieDetails ? 
                        <Link to='/'>back</Link> :
                            <>{catagories.map(catagory => {
                                return <LetterBox 
                                            key={catagory.name} 
                                            catagory={catagory} 
                                            selectedCatagory={this.props.store.catagory} />
                            })}</>
                    }
                    <Search />
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
    /* background: white; */
    width: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1 {
        font-size: 5vw;
        font-family: marqueeregular, Arial, Helvetica, sans-serif;
        color: black;
    }
    .catagories{
        /* border: 1px solid green; */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    div {
        width: 100%;
        /* border: 1px solid green; */
        /* border-bottom: 1px solid black; */
        border-top: 1px solid black;
        font-family: 'Staatliches';
        word-spacing: 10px;
        display: flex;
        justify-content: center;
        a {
            text-decoration: none;
        }
    }
`