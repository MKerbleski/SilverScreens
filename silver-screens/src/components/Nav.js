import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { changePage } from '../actions'

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        // console.log(this.props)
        return(
            <NavDiv> 
                <button onClick={() => this.props.changePage(this.props.store.pageNum-1)}>Prev</button>
                <span>page: {this.props.store.pageNum}</span>
                <button onClick={() => this.props.changePage(this.props.store.pageNum+1)}>Next</button>
            </NavDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

const NavDiv = styled.div`
    border: 1px solid red;
`