import React , { Component } from 'react'
import styled from 'styled-components'
import MovieSmall from './MovieSmall'
import { connect } from 'react-redux';
import { fetchNowPlaying } from '../actions'

class NowPlaying extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        this.props.fetchNowPlaying()
    }

    render(){
        return(
            <NowPlayingDiv> 
                {this.props.store.movieList ? this.props.store.movieList.results.map(movie => {
                    return <MovieSmall key={movie.id} movie={movie} />
                }) : <h1>loading...</h1>}
            </NowPlayingDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    fetchNowPlaying
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)

const NowPlayingDiv = styled.div`
    border: 1px solid blue;
    margin: 1px;
`