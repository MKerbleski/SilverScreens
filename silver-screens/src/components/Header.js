import React , { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Search from './Search'
import { connect } from 'react-redux';

import { 
    requireUpdate
} from '../actions'

const catagories = [
    {'url':'now_playing',
    'name': 'Now Playing'}, 
    {'url':'popular',
    'name': 'Popular'}, 
    {'url':'top_rated',
    'name': 'Top Rated'}, 
]

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    clickHandler(e){
        e.preventDefault();
        this.props.requireUpdate();
    }

    render(){
        return(
            <HeaderDiv> 
                  <>
                    <Link to='/'><h1>Silver Screens</h1></Link>
                    {this.props.store.movieDetails ? 
                        <Link to='/'>back</Link> :
                        <div>
                        {catagories.map(catagory => {
                            return <button key={catagory.name} onClick={(e) => this.clickHandler(e)}>
                            <Link 
                                to={`/sort/${catagory.url}`}>{catagory.name}</Link> </button>
                            {/* <button 
                                key={catagory} 
                                name={catagory} 
                                style={{background: this.props.store.catagory === catagory ? 'green' : 'blue'}}
                                onClick={() => this.props.changeCatagory(catagory)}>{catagory}</button> */}
                        })}
                        </div>
                    }
                  </>
                  <Search />
            </HeaderDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    requireUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderDiv = styled.header`
    width: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`