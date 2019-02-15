import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fetchList, requireUpdate } from '../actions'
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
            active: false,
            check: false,
        }
    }

    inputHandler(e){
        console.log("hi")

        if(this.state.searchInput.length > 0){
            console.log("query")
        }
        this.props.requireUpdate()

        // this.setState({check: true})
        // e.preventDefault()
        // if(e.target.name ==='search'){
        //     this.props.fetchList('search', 1, this.state.searchInput)
        // } else {
        //     this.setState({
        //         [e.target.name]: e.target.value
        //     })
        // }
        // return <Redirect to='/' />
    }

    render(){
        if(this.state.check){
        }
        return(
            <SearchBarDiv>
                <input 
                    name="searchInput" 
                    value={this.state.searchInput}
                    onChange={(e) =>  
                        this.setState({
                            [e.target.name]: e.target.value
                        })}
                    >{this.value}</input>
                <Link 
                    to={this.state.searchInput.length > 0 ? `/search/${this.state.searchInput}` : '/'} 
                    onClick={(e) =>      
                        this.inputHandler(e)
                        // this.props.requireUpdate()
                        }>super</Link>
                <Link to="/">clear</Link>
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