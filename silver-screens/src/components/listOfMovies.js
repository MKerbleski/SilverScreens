import React , { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchList } from '../actions'
import { Nav, MovieSmall } from './index';

class ListOfMovies extends Component {
    componentDidMount(){
       this.getList();
    }

    getList(){
        if (this.props.match.url.includes('search')){
            let query = this.props.match.url.slice(8)
            this.props.fetchList('search', 1, query)
        } else if (this.props.match.url.includes('sort')){
            let catagory = this.props.match.url.slice(6)
            this.props.fetchList(catagory)
        } else {
            if(this.props.match.url == '/'){
                let defaultCat = 'now_playing'
                this.props.fetchList(defaultCat)
            } else {
                let catagory = this.props.match.url.slice(1)
                this.props.fetchList(catagory)
            }
        }
    }

    render(){
        if(this.props.store.update){
            this.getList()
        }
        if(this.props.match.url === 'search/'){
            console.log("REDIRECT")
            return <Redirect to='/' />
        }
        return(
            <ListOfMoviesDiv>                
                <div className="movies">
                    {this.props.store.movieList ? 
                        this.props.store.movieList.map(movie => {
                            return <MovieSmall key={movie.id} movie={movie} />
                        }) : <h1>loading...</h1>}
                </div>
                {this.props.store.movieList && 
                    this.props.store.movieList.length === 0 ? 
                        <h4>No Movies found</h4> : null} 
                <div className="line">
                    <Nav />
                </div>
            </ListOfMoviesDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    // changeCatagory,
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
    .line {
        /* REPEAT */
        /* text-decoration: none; */
        width: 100%;
        /* border: 1px solid green; */
        /* border-bottom: 1px solid black; */
        border-top: 1px solid black;
        /* font-family: 'Staatliches'; */
        /* word-spacing: 10px; */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: white;
        /* background: green; */
        h1 {
            font-size: 5vw;
            font-family: marqueeregular, Arial, Helvetica, sans-serif;
            color: black;
            background: white;
            width: 100%;
            margin: 0;
        }
    }
`