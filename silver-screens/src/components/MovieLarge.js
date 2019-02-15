import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { 
    getMovieDetails,
    clearMovieDetails    
} from '../actions'
// import axios from 'axios'
import { Link } from 'react-router-dom';

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
        console.log(this.props.store)
        const  movie  = this.props.store.movieDetails
        console.log(movie)
        if(movie){

            // if(this.props.store.selectedMovie === movie.id){
                //     const selectedMovie = document.getElementById(`${this.props.store.selectedMovie}`)
                //     console.log(selectedMovie)
                //     selectedMovie.scrollIntoView({behavior: "smooth",  block: "start"})
                // console.log(selectedMovie.scrollHeight)
                // document.documentElement.scrollTop = selectedMovie.scrollHeight
                // }
                return (
                    <MoviesLargeDiv id={movie.id}> 
                        <Link to="/">Back</Link>
                        <div className="details">
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`} />   
                            </div>
                            <div className="words">
                                <strong>{movie.original_title}</strong>
                                <p>Total Votes: {movie.vote_count}</p>
                                <p>Vote Average: {movie.vote_average}</p>
                                <p>Language: {movie.original_language}</p>
                                <p>Overview: {movie.overview}</p>
                                <p>Popularity: {movie.popularity}</p>
                                <p>Release Date: {movie.release_date}</p>
                                {movie.adult ? <p>ADULT</p>: null}
                            </div>
                        </div>
                    </MoviesLargeDiv>
        )
    } else {
        return <h1>oops</h1>
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
    border: 1px solid red;
    /* min-width: 300px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 1px;
    height: auto;
    box-sizing: border-box;

    .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        .words {
            max-width: 500px;
        }
    }
`