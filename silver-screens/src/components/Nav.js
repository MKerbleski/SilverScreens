import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { changePage } from '../actions'

class Nav extends Component {
    render(){
        const { pageNum, catagory, totalPages } = this.props.store
        return(
            <NavDiv> 
                {pageNum === 1 ? null :
                    <button onClick={() => {
                        this.props.changePage(catagory, pageNum-1)}}>Prev</button>}
                <span>page: {pageNum} of {totalPages}</span>
                {totalPages === pageNum ? null :
                     <button onClick={() => {
                        this.props.changePage(catagory, pageNum+1)}}>Next</button>}
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
    color: white;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
`