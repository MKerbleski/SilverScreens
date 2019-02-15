import React , { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Search from './Search'
import { connect} from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <HeaderDiv> 
                  <>
                    <Link to='/'><h1>Silver Screens</h1></Link>
                    {this.props.store.movieDetails ? 
                        <Link to='/' >back</Link> :
                        null}
                  </>
                  <Search />
            </HeaderDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
  }
export default connect(mapStateToProps)(Header);

const HeaderDiv = styled.header`
    width: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`