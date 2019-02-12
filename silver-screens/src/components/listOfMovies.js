import React , { Component } from 'react'
import styled from 'styled-components'
import NowPlaying from './NowPlaying'
import Nav from './Nav'

export default class ListOfMovies extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        console.log(this.state)
        return(
            <ListOfMoviesDiv> 
                <h1>list of movies</h1>
                <NowPlaying />
                <Nav />
            </ListOfMoviesDiv>
        )
    }
}

const ListOfMoviesDiv = styled.div`
    border: 1px solid red;
`