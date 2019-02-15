import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fetchList } from '../actions'

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
                <form name='search' onSubmit={(e) => this.inputHandler(e)}>
                    <input 
                        name="searchInput" 
                        value={this.state.searchInput}
                        onChange={(e) => this.inputHandler(e)}
                    >{this.value}</input>
                    <input type="submit" value="Search" />
                </form>
            </SearchBarDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    fetchList
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

const SearchBarDiv = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
`