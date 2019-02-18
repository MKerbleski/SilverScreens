import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import { fetchList, requireUpdate } from '../actions'
import { LetterBoxString } from './index';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
            active: false,
        }
    }

    inputHandler(e){
        if(e === 'clear'){
            this.setState({
                searchInput: '',
            })
            this.props.requireUpdate()
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render(){
        return(
            <SearchBarDiv>
                {this.state.active 
                    ?   <>  
                            <input 
                                placeholder="search here"
                                name="searchInput" 
                                value={this.state.searchInput}
                                onChange={(e) => this.inputHandler(e)}
                                >{this.value}</input>
                            <LetterBoxString 
                                word='Search'
                                url={this.state.searchInput.length > 0 ? `/search/${this.state.searchInput}` : '/'} />
                            <div 
                                name="clear"
                                onClick={(e) => this.inputHandler('clear')}>
                                <LetterBoxString 
                                    word='Clear'
                                    function={this.inputHandler}
                                    url='/' />
                            </div>
                        </> 
                    :   null}
                <div onClick={() => this.setState({active: !this.state.active})}>
                    <LetterBoxString icon fontA="fas fa-search" />
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
        font-family: 'Staatliches', Arial, Helvetica, sans-serif;
    }

`