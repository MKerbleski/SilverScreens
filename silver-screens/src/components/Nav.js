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
                {pageNum === 1 ?
                    <span className="lineItem"/> :
                    <span className="lineItem">
                        <LetterBoxString 
                            className="lineItem"
                            word='Previous'
                            pageNum={pageNum-1}
                            catagory={catagory}
                            navigate={this.props.changePage}
                            />
                    </span>
                }
                <span className="lineItem">
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
                {totalPages === pageNum ?
                    <span  className="lineItem"/> :
                    <span className="lineItem">
                        <LetterBoxString 
                            className="lineItem"
                            word='Next'
                            pageNum={pageNum+1}
                            catagory={catagory}
                            navigate={this.props.changePage}
                            />
                    </span>}
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
    /* border: 1px solid red; */
    color: black;
    width: 100%;
    display: flex;
    justify-content: space-around;
    span {
        display: flex;
        flex-direction: row;
    }
    .lineItem{
        display: flex;
        justify-content: center;
        width: 100%;
    }
`