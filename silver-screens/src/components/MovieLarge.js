import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import { 
    getMovieDetails,
    clearMovieDetails    
} from '../actions'


class MovieLarge extends Component {
    constructor(props){
        super(props)
        this.state = {
            expand: false,
        }
    }

    componentDidMount(){
        console.log("CDM", this.props)
        this.props.getMovieDetails(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearMovieDetails()
    }

    render(){
        const  movie  = this.props.store.movieDetails
        if(movie){
            return (
                <MoviesLargeDiv id={movie.id}>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={`${movie.original_title} poster`} />   
                    <div className="words">
                        <h1><strong>{movie.original_title}</strong></h1>
                        <p>Total Votes: {movie.vote_count}</p>
                        <p>Vote Average: {movie.vote_average}</p>
                        <p>Language: {movie.original_language}</p>
                        <p>Overview: {movie.overview}</p>
                        <p>Popularity: {movie.popularity}</p>
                        <p>Release Date: {movie.release_date}</p>
                        {movie.adult ? <p>ADULT</p>: null}
                    </div>
                </MoviesLargeDiv>
        )
    } else {
        return <h1>Loading</h1>
    }
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    getMovieDetails,
    clearMovieDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieLarge)

const MoviesLargeDiv = styled.div`
    /* border: 1px solid red; */
    /* min-width: 300px; */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin: 5px 0;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    color: white;
    .words {
        border: 1px solid green;
        padding: 5px;
        max-width: 500px;
    }

`