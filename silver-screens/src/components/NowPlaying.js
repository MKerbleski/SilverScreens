//https://api.themoviedb.org/3/movie/now_playing?api_key=eb78932ad7ebfc9390234541280b7c84&language=en-US&page=1

import React , { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MovieSmall from './MovieSmall'

export default class NowPlaying extends Component {
    constructor(props){
        super(props)
        this.state = {
            page: 1,
        }
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eb78932ad7ebfc9390234541280b7c84&language=en-US&page=${this.state.page}`).then(res => {
            this.setState({
                nowPlaying: res.data
            })
        }).catch(error => {
            console.log(error)
            this.setState({
                error: error
            })
        })
    }

    pageHandler(forward=true){
        if(forward){
            this.setState({
                page: this.state.page+1,
            })
        } else {
            this.setState({
                page: this.state.page-1,
            })
        }
    }

    render(){
        return(
            <NowPlayingDiv> 
                    {this.state.nowPlaying ? this.state.nowPlaying.results.map(movie => {
                        return <MovieSmall movie={movie} />
                    }) : null}
                    <button onClick={() => this.pageHandler(false)}>Prev</button>
                    <button onClick={() => this.pageHandler(true)}>Next</button>
            </NowPlayingDiv>
        )
    }
}

const NowPlayingDiv = styled.div`
    border: 1px solid blue;
    margin: 1px;
`