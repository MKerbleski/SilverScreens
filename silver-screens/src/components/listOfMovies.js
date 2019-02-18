import React , { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchList } from '../actions'
import { Nav, MovieSmall } from './index';
import { line } from '../style/sharedStyles'

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
            if(this.props.match.url === '/'){
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
    margin-top: 5px;
    .movies {
        /* border: 1px solid green; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
        width: 100%;
        @media (max-width: 500px) {
            /* max-width: 49%; */
        }
    }
    .line {
        /* REPEAT */
        margin-top: 5px;
       ${line()}
    }
`



// length: 2
// __proto__: Array(0)
// homepage: null
// id: 40096
// imdb_id: "tt0271383"
// original_language: "pt"
// popularity: 6.305
// poster_path: "/uHEmM49YphluJnGep8Ef1qwD2QX.jpg"
// production_companies: (2) [{…}, {…}]
// production_countries: [{…}]
// release_date: "2000-09-15"
// revenue: 0
// runtime: 104
// spoken_languages: [{…}]
// status: "Released"
// tagline: ""
// title: "A Dog's Will"
// video: false
// vote_average: 8.4
// vote_count: 381