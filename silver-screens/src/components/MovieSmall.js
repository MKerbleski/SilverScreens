import React , { Component } from 'react'
import styled from 'styled-components'

//should probably be movie preview 
//then include move details when clicked
export default class MovieSmall extends Component {
    constructor(props){
        super(props)
        this.state = {
            expand: false,
        }
    }

    render(){
        const { movie } = this.props
        return(
            <MovieSmallDiv> 
                {this.state.expand ? null : 
                    <div className='preview' onClick={() => this.setState({expand: !this.state.expand})}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
                            alt={`${movie.original_title} poster`}
                             />
                        <strong>{movie.original_title}</strong>
                    </div>}
                {this.state.expand ? 
                    <div className="details" onClick={() => this.setState({expand: !this.state.expand})}>
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
                    </div> : null}
            </MovieSmallDiv>
        )
    }
}

const MovieSmallDiv = styled.div`
    /* border: 1px solid red; */
    /* min-width: 300px; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1px;
    height: auto;
    box-sizing: border-box;
    .preview {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;
        color: white;
        margin: 1px;
        height: auto;
        width: 100%;
        overflow: auto;
        :hover{
            cursor: pointer;
            strong {
                opacity: 1;
                font-size: 36px;
            }
            img {
                /* width: 100%; */
                filter: blur(1px)
            }
        }
        strong {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: .8;
            font-size: 40px;
            max-width: 100%;
            -webkit-text-stroke: 1px black;
            @media (max-width: 500px) {
                font-size: 10vw;
            }
        }
        img {
            /* border: 1px solid red; */
            /* width: 100%; */
            height: auto;
            max-width: 100%;
            /* margin: 1px; */
        }
    }
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