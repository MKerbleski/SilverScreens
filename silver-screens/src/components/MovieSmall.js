import React , { Component } from 'react'
import styled from 'styled-components'

export default class MovieSmall extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        const { movie } = this.props
        return(
            <MovieSmallDiv> 
                <span><strong>{movie.original_title}</strong></span>
            </MovieSmallDiv>
        )
    }
}

const MovieSmallDiv = styled.div`
    border: 1px solid red;
`