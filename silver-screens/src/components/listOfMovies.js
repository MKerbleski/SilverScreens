import React , { Component } from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Search from './Search'
import MovieSmall from './MovieSmall'

import { connect } from 'react-redux';
import { 
    changeCatagory, 
    fetchList,
} from '../actions'


const sortCatagories = ['Now Playing', 'Popular', 'Top Rated']

class ListOfMovies extends Component {
    
    componentDidMount(){
        this.props.fetchList(sortCatagories[0])
    }

    render(){
        console.log("List render")
        return(
            <ListOfMoviesDiv> 
                <h1>{this.props.store.catagory}</h1>
                {sortCatagories.map(catagory => {
                    return <button 
                        key={catagory} 
                        name={catagory} 
                        style={{background: this.props.store.catagory === catagory ? 'green' : 'blue'}}
                        onClick={() => this.props.changeCatagory(catagory)}>{catagory}</button>
                })}
                <Search />
                <div className="movies">
                {this.props.store.movieList ? 
                    this.props.store.movieList.map(movie => {
                        return <MovieSmall key={movie.id} movie={movie} />
                    }) : <h1>loading...</h1>}
                </div>
                {this.props.store.movieList && this.props.store.movieList.length === 0 ? 
                    <h4>No Movies found</h4> : null} 
                <Nav />
            </ListOfMoviesDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    changeCatagory,
    fetchList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfMovies)

const ListOfMoviesDiv = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    max-width: 2000px;
    .movies {
        /* border: 1px solid green; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-evenly;
        width: 100%;
        @media (max-width: 500px) {
            /* max-width: 49%; */
        }
    }
`