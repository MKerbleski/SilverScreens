import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import { 
    getMovieDetails,
    clearMovieDetails    
} from '../actions'

import {
    Loading
} from './index'

class MovieLarge extends Component {
    componentDidMount(){
        this.props.getMovieDetails(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearMovieDetails()
    }

    render(){
        const movie = this.props.store.movieDetails;
        if(movie){
            return (
                <MoviesLargeDiv id={movie.id}>
                    <div className="title">
                        <h1>
                            <strong>{movie.original_title} </strong>{movie.imdb_id 
                                ?   <a  rel="noopener noreferrer"
                                        target="_blank" 
                                        href={`https://www.imdb.com/showtimes/title/${movie.imdb_id}`}>
                                        <i class="fab fa-imdb"></i>
                                    </a> 
                                : null} 
                        </h1>
                        <p><strong>{movie.tagline}</strong></p>
                    </div>
                    <div className="content">
                        <div className="top">
                            
                            <div className="details">
                                {movie.adult ? <p>ADULT</p> : null}
                                <p><strong>Overview: </strong>{movie.overview}</p>
                                <p><strong>Minutes: </strong>{movie.runtime}</p>
                                <p><strong>Release Date: </strong>{movie.release_date}</p>
                                <p><strong>Budget: </strong>${Number(movie.budget).toLocaleString('en')}</p>
                                <p><strong>Revenue: </strong>${Number(movie.revenue).toLocaleString('en')}</p>
                                <p><strong>Total Votes: </strong>{movie.vote_count}</p>
                                <p><strong>Vote Average: </strong>{movie.vote_average}</p>
                                <p><strong>Popularity: </strong>{movie.popularity}</p>
                                <p>{movie.genres.map((genre, i) => {
                                        if(i === 0){
                                            return <span><strong>{movie.genres.length > 1 ? 'Genres: ' : 'Genre: '}</strong>{genre.name}</span>
                                        } else {
                                            return <span>, {genre.name}</span>
                                        }})}</p>
                                <p>{movie.spoken_languages ? movie.spoken_languages.map((lan, i) => {
                                        if(i === 0){
                                            return <span><strong>{movie.spoken_languages.length > 1 ? 'Spoken Languages: ' : 'Spoken Language '}</strong>{lan.name}</span>
                                        } else {
                                            return <span>, {lan.name}</span>
                                        }}): null}</p>
                                <p>{movie.production_companies ? movie.production_companies.map((co, i) => {
                                        if(i === 0){
                                            return <span><strong>{movie.production_companies.length > 1 ? 'Production Companies: ' : 'Production Company: '}</strong>{co.name}</span>
                                        } else {
                                            return <span>, {co.name}</span>
                                        }}): null}</p>
                                <p>{movie.production_countries ? movie.production_countries.map((co, i) => {
                                        if(i === 0){
                                            return <span><strong>{movie.production_countries.length > 1 ? 'Production Countries: ' : 'Production Country: '}</strong>{co.name}</span>
                                        } else {
                                            return <span>, {co.name}</span>
                                        }}): null}</p>
                            </div>
                            <div className="poster">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`} />
                            </div>
                        </div>
                    </div>
                </MoviesLargeDiv>
        )
    } else {
        return <Loading error={this.props.store.error}/>
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
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin: 15px 0;
    padding: 5px;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    background: #aa7a87;
    .title {
        /* border: 1px solid purple; */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            margin: 0;
            font-size: 9vw;
            text-align: center;
            vertical-align: center;
            i {
                color: black;
            }
        }
    }
    .content {
        /* border: 1px solid blue; */
        .top {
            /* border: 1px solid green; */
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;
            @media(max-width: 500px){
                flex-direction: column;
                align-items: flex-start;
            }
            .details, .poster {
                /* border: 1px solid red; */
                width: 50%;
                padding: 5px;
                @media(max-width: 500px){
                    width: 100%;
                }
                p {
                    margin-top: 0
                }
                img {
                    width: 100%;
                }
            }
        }
    }
    a {
        font-size: 40px;
    }
    p {
        margin: 4px;
    }

`