import React , { Component } from 'react'
import styled from 'styled-components'

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
            </ListOfMoviesDiv>
        )
    }
}

const ListOfMoviesDiv = styled.div`
    border: 1px solid red;
`