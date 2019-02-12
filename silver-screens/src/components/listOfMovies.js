import React , { Component } from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import MovieSmall from './MovieSmall'
import { connect } from 'react-redux';
import { 
    changeCatagory, 
    fetchNowPlaying
} from '../actions'

const sortCatagories = ['Now Playing', 'Popular', 'Top Rated']

class ListOfMovies extends Component {

    fetchList(cat){
        switch(cat){
            case 'Now Playing':
                this.props.fetchNowPlaying()
                break;
            default: 
                break;
        }
    }
    
    componentDidMount(){
        this.fetchList(this.props.store.catagory)
    }

    render(){
        return(
            <ListOfMoviesDiv> 
                <h1>list of movies</h1>
                {sortCatagories.map(catagory => {
                    return <button 
                        key={catagory} 
                        name={catagory} 
                        style={{background: this.props.store.catagory === catagory ? 'green' : 'blue'}}
                        onClick={() => this.props.changeCatagory(catagory)}>{catagory}</button>
                })}
                {this.props.store.movieList ? this.props.store.movieList.results.map(movie => {
                    return <MovieSmall key={movie.id} movie={movie} />
                }) : <h1>loading...</h1>}
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
    fetchNowPlaying,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfMovies)

const ListOfMoviesDiv = styled.div`
    border: 1px solid red;
    button{
        :active{

        }
    }
`