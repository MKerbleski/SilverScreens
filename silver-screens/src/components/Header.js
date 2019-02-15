import React , { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Search from './Search'
import { connect } from 'react-redux';

import { 
    requireUpdate
} from '../actions'

import ReactHtmlParser from 'react-html-parser'

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
    clickHandler(e){
        e.preventDefault();
        this.props.requireUpdate();
    }
    renderLetters(string){

        let htmlString = '';
        for (let i = 0; i<string.length; i++){
            let next = `<span className="letter">${string[i]}</span>`
            // console.log(next)
            htmlString += next
        }
        console.log(htmlString)

        // let parser = new DomParser();
        // let wrapper = document.createElement('span')
        // wrapper.innerHTML = htmlString
        // wrapper.getElementsByTagName('span')
        // console.log(wrapper)

        // var parser = new DOMParser();
        // var wrapper = parser.parseFromString(htmlString, "text/html");
        // wrapper.getElementsByTagName('span');
        // console.log(wrapper)

        return htmlString
    }

    render(){
        return(
            <HeaderDiv> 
                <div className="catagories">
                    <Link to='/'><h1>Silver Screens</h1></Link> 
                    {this.props.store.movieDetails ? 
                        <Link to='/'>back</Link> :
                            <>{catagories.map(catagory => {
                                return <div key={catagory.name} onClick={(e) => this.clickHandler(e)}>
                                <Link 
                                    to={`/sort/${catagory.url}`}>{ReactHtmlParser(this.renderLetters(catagory.name))}</Link> </div>
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

const mapDispatchToProps = {
    requireUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderDiv = styled.header`
    background: white;
    width: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .catagories{
        border: 1px solid green;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
    }
    div {
        width: 100%;
        border: 1px solid green;
        border-bottom: 1px solid black;
        font-family: 'Staatliches';
        word-spacing: 10px;
        display: flex;
        justify-content: center;
        a {
            text-decoration: none;
            span{
                background: white;
                margin: 1px;
                padding: 1px;
                color: black;
                border: 1px solid gray;
                bottom: 1px;
            }
        }
    }
`