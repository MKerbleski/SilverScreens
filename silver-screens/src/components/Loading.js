import React , { Component } from 'react'
import styled from 'styled-components'

export default class Loading extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <LoadingDiv> 
                {this.props.error ? <p>Error: {this.props.error}</p> : <h3>Loading...</h3> }
            </LoadingDiv>
        )
    }
}

const LoadingDiv = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
`