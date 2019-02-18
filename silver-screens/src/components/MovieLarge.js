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
        // console.log("CDM", this.props)
        this.props.getMovieDetails(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearMovieDetails()
    }

    render(){
        const  movie  = this.props.store.movieDetails
        console.log(movie)
        if(movie){
            return (
                <MoviesLargeDiv id={movie.id}>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={`${movie.original_title} poster`} />   
                    <div className="words">
                        <div className="top">
                            <div className="topLeft">
                                <h1>
                                    <strong>{movie.original_title} </strong>{movie.imdb_id 
                                        ?   <a  rel="noopener noreferrer"
                                                target="_blank" 
                                                href={`https://www.imdb.com/showtimes/title/${movie.imdb_id}`}>
                                                <i class="fab fa-imdb"></i>
                                            </a> 
                                        : null} 
                                </h1>
                                {movie.adult ? <p>ADULT</p> : null}
                                <p><strong>Total Votes: </strong>{movie.vote_count}</p>
                                <p>Genere(s):
                                    {movie.genres.map(genre => {
                                        return <span> {genre.name}</span>})}
                                </p>
                                
                                <p>Release Date: {movie.release_date}</p>
                                <p>Revenue: {movie.revenue}</p>
                                <p>Minutes: {movie.runtime}</p>
                                <p>Tagline: {movie.tagline}</p>
                                <p>Budget: {movie.budget}</p>
                                <p>Vote Average: {movie.vote_average}</p>
                                <p>Vote Count: {movie.vote_count}</p>
                                <p>Popularity: {movie.popularity}</p>
                                <p>Vote Average: {movie.vote_average}</p>
                                <p>Language: {movie.original_language}</p>
                            </div>
                            <div className="topRight">
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                    alt={`${movie.original_title} poster`} />   
                            </div>
                        </div>
                        <p>Overview: {movie.overview}</p>
                        <p>Release Date: {movie.release_date}</p>
                        {movie.adult ? <p>ADULT</p>: null}
                        <p>Production Companies:  
                            {movie.production_companies ? movie.production_companies.map(company => {
                                return <span>{company.name}</span>
                            }): null}</p>
                        <p>Production Countries: 
                            {movie.production_countries ? movie.production_countries.map(country => {
                                return <span>{country.name}</span>
                            }): null}</p>
                        <p>Spoken Languages: 
                            {movie.spoken_languages ? movie.spoken_languages.map(language => {
                                return <span>{language.name}</span>
                            }): null}</p>
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
    margin: 15px 0;
    padding: 5px;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    background: #aa7a87;
    img {
        width: 50%;
        @media(max-width: 1000px){
            display: none;
        }
    }
    .words {
        color: white;
        /* border: 1px solid green; */
        padding: 10px;
        height: 100%;
        width: 100%;
        .top{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .topLeft{
                width: 50%;
                @media(min-width: 1000px){
                    width: 100%;
                }
            }
            .topRight{
                width: 50%;
                img {
                    width: 100%;
                    height: auto;
                    display: flex;
                    @media(min-width: 1000px){
                        display: none;
                    }
                }
            }
        }
        a {
            font-size: 40px;
        }
    }

`