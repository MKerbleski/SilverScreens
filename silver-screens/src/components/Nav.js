import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { changePage } from '../actions'
import { LetterBoxString } from './index';

class Nav extends Component {
    navigate(cat, page){
        this.props.changePage(cat, page)
    }
    
    render(){
        const { pageNum, catagory, totalPages } = this.props.store
        if(this.props.store.movieList && this.props.store.movieList.length === 0){
            return null
        } else {
            return(
                <NavDiv className="line"> 
                    {pageNum === 1 
                        ?   <span className="lineItem"/> 
                        :   <span className="lineItem">
                                <LetterBoxString 
                                    className="lineItem"
                                    word='Prev'
                                    icon fontA="fas fa-arrow-left"
                                    pageNum={pageNum-1}
                                    catagory={catagory}
                                    navigate={this.props.changePage}
                                    />
                            </span>
                    }
                    <span className="lineItem largeNum">
                        <LetterBoxString 
                            static
                            word={`page`} />
                        <LetterBoxString 
                            static
                            word={`${pageNum}`} />
                        <LetterBoxString 
                            static
                            word={`of`} />
                        <LetterBoxString 
                            static
                            word={`#${totalPages}`} />
                    </span>
                    <span className="lineItem smallNum">
                        <LetterBoxString 
                            static
                            word={`page`} />
                        <LetterBoxString 
                            static
                            word={`#${pageNum}`} />
                    </span>
                    {totalPages === pageNum 
                        ?   <span  className="lineItem"/> 
                        :   <span className="lineItem">
                                <LetterBoxString 
                                    className="lineItem"
                                    word='Next'
                                    icon fontA="fas fa-arrow-right"
                                    pageNum={pageNum+1}
                                    catagory={catagory}
                                    navigate={this.props.changePage}
                                    />
                            </span>
                    }
                </NavDiv>
            )
        }
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
    color: black;
    width: 100%;
    display: flex;
    justify-content: space-around;
    span {
        display: flex;
        flex-direction: row;
    }
    .lineItem {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .largeNum {
        display: flex;
        @media (max-width: 500px) {
            display: none;
        }
    }
    .smallNum {
        display: none;
        @media (max-width: 500px) {
            display: flex;
        }
    }
`