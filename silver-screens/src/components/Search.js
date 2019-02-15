import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fetchList, requireUpdate } from '../actions'
import { Link } from "react-router-dom";

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
            active: false,
        }
    }

    inputHandler(e){
        e.preventDefault()
        if(e.target.name ==='search'){
            this.props.fetchList('search', 1, this.state.searchInput)
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render(){
        return(
            <SearchBarDiv>
                {/* <form name='search' onSubmit={(e) => this.inputHandler(e)}> */}
                    <input 
                        name="searchInput" 
                        value={this.state.searchInput}
                        onChange={(e) =>  this.setState({
                [e.target.name]: e.target.value
            })}
                    >{this.value}</input>
                    <Link to={`/search/${this.state.searchInput}` 
                    } onClick={() => this.props.requireUpdate()}>super</Link>
                    {/* <input type="submit" value="Search" /> */}
                {/* </form> */}
            </SearchBarDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    fetchList,
    requireUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

const SearchBarDiv = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
`