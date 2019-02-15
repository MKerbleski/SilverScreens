import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { 
    selectMovie
} from '../actions'
import { Link } from 'react-router-dom';

class MovieSmall extends Component {
    constructor(props){
        super(props)
        this.state = {
            expand: false,
        }
    }

    selector(movieId){
        this.props.selectMovie(movieId)
    }

    render(){
        const { movie } = this.props
        return(
            <MovieSmallDiv 
                as={Link}
                to={`movie/${movie.id}`}
                className='preview' 
                onClick={() => this.selector(movie.id)}
                id={movie.id}> 
                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` || `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
                        alt={`${movie.poster_path} poster`} />
                    <strong>{movie.original_title}</strong>
            </MovieSmallDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    selectMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSmall)

const MovieSmallDiv = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    width: 100%;
    color: white;
    margin: 1px;
    height: auto;
    max-width: 500px;
    overflow: hidden;
    @media(min-width: 500px){
        width: 49.5%;
    }
    @media(min-width: 1000px){
        width: 33%;
    }
    @media(min-width: 1500px){
        width: 24.5%;
    }
    :hover{
        cursor: pointer;
        strong {
            opacity: 1;
        }
        img {
            filter: blur(0)
        }
    }
    strong {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        max-width: 100%;
        height: auto;
        opacity: .8;
        font-size: 9vw;
        -webkit-text-stroke: 1px black;
        @media (min-width: 500px) {
            font-size: 4vw;
        }
        @media (min-width: 1000px) {
            font-size: 3vw;
        }
        @media (min-width: 1500px) {
            font-size: 2vw;
        }
    }
    img {
        height: auto;
        width: 100%;
        filter: blur(1px);
    }
`