import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { changePage } from '../actions'
import LetterBoxString from './LetterBoxString';

class Nav extends Component {
    constructor(props){
        super(props)
    }
    navigate(cat, page){
        console.log(this)
        this.props.changePage(cat, page)
    }
    render(){
        const { pageNum, catagory, totalPages } = this.props.store
        return(
            <NavDiv> 
                {pageNum === 1 ? <LetterBoxString /> :
                    <LetterBoxString 
                        word='Previous'
                        pageNum={pageNum-1}
                        catagory={catagory}
                        navigate={this.props.changePage}
                         />
                   }
                   <span>
                        <LetterBoxString 
                            static
                            word={`page:`} />
                        <LetterBoxString 
                        static
                            word={`${pageNum}`} />
                        <LetterBoxString 
                        static
                            word={`of`} />
                        <LetterBoxString 
                        static
                            word={`${totalPages}`} />
                   </span>
                {/* <span>page: {pageNum} of {totalPages}</span>  */}
                {totalPages === pageNum ? <LetterBoxString /> :
                    <LetterBoxString 
                        word='Next'
                        pageNum={pageNum+1}
                        catagory={catagory}
                        navigate={this.props.changePage}
                         />}
            </NavDiv>
        )
    }
}

{/* <button onClick={() => {
    this.props.changePage(catagory, pageNum-1)}}>Prev</button> */}

// {totalPages === pageNum ? <div></div> :
//     <button onClick={() => {
//        this.props.changePage(catagory, pageNum+1)}}>Next</button>}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

const NavDiv = styled.div`
    border: 1px solid red;
    color: black;
    /* padding: 10px; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
        display: flex;
        flex-direction: row;
    }
`