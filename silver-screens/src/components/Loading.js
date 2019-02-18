import React , { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

export default class Loading extends Component {
    render(){
        return(
            <LoadingDiv> 
                {this.props.error 
                    ?   <>
                            <p>
                                Error: {this.props.error.message}   
                            </p> 
                            <Link to='/'>Home</Link>
                        </>
                    :   <h3>Loading...</h3> }
                
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
    width: 100%;
    a {
        color: white
    }
`