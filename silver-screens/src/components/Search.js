import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fetchList, requireUpdate } from '../actions'
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import LetterBoxString from './LetterBoxString';

let magGlass = '&#128269';

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
        console.log(this.state.active)
        if(this.state.check){
        }
        return(
            <SearchBarDiv>
                {this.state.active ? <><input 
                    placeholder="search here"
                    name="searchInput" 
                    value={this.state.searchInput}
                    onChange={(e) =>  
                        this.setState({
                            [e.target.name]: e.target.value
                        })}
                    >{this.value}</input>
                <LetterBoxString 
                    word='Clear'
                    url='/' />
                <LetterBoxString 
                    word='Search'
                    url={this.state.searchInput.length > 0 ? `/search/${this.state.searchInput}` : '/'} /> </> : null
                    }
                    <div onClick={() => {
                        this.setState({active: !this.state.active})
                    }}>
                    <LetterBoxString
                        mag />
                    </div>
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
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    .lineItem {
        border: 1px solid green;
        margin: 0;
        height: auto;
    }
    a {
        margin: 0;
        color: black;
        margin-left: 5px;
    }
    input {
        margin: 0;
    }

`