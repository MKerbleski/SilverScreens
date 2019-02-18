import React , { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchList } from '../actions'
import { Loading, MovieSmall } from './index';
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
            if(catagory === "undefined"){
                catagory = 'now_playing'
            }
            this.props.fetchList(catagory, this.props.store.pageNum)
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
            return <Redirect to='/' />
        }
        return(
            <ListOfMoviesDiv>                
                <div className="movies">
                    {this.props.store.movieList 
                        ?   this.props.store.movieList.map(movie => {
                                return <MovieSmall key={movie.id} movie={movie} /> }) 
                        :   <Loading error={this.props.store.error} />}
                </div>
                {this.props.store.movieList && this.props.store.movieList.length === 0 
                    ?   <h4>No Movies found</h4> 
                    : null} 
            </ListOfMoviesDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    fetchList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfMovies)

const ListOfMoviesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    max-width: 2000px;
    padding: 5px;
    .movies {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
        width: 100%;
    }
    .line {
        ${line()}
        margin-top: 5px;
        width: 80%;
    }
`