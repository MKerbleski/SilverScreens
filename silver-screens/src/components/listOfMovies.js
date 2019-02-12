import React , { Component } from 'react'
import styled from 'styled-components'
import NowPlaying from './NowPlaying'

export default class ListOfMovies extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <ListOfMoviesDiv> 
                lisst of movies
                <NowPlaying />
            </ListOfMoviesDiv>
        )
    }
}

const ListOfMoviesDiv = styled.div`
    border: 1px solid red;
`