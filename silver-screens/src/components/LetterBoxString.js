import React , { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux';

import { requireUpdate } from '../actions'

class LetterBoxString extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    clickHandler(e){
        e.preventDefault();
        this.props.requireUpdate();
    }

    renderLetters(string){
        let htmlString = '<span class="word">';
        for (let i = 0; i < string.length; i++){
            let next = `<span class="letter">${string[i]}</span>`
            htmlString += next
        }
        htmlString+='</span>'
        return htmlString
    }

    render(){
        return(
            <LetterBoxStringDiv 
                highlight={this.props.highlight}
                onClick={this.props.url 
                    ? (e) => this.clickHandler(e) 
                    : null}> 
                {this.props.justIcon 
                    ?   <span className='word'>
                            <span className='letter'>
                                <i className={this.props.fontA}></i>
                            </span>
                        </span> 
                    :   null}
                {this.props.url 
                    ?   <Link to={this.props.url}>
                            {this.props.icon 
                                ?   <span className='word'>
                                        <span className='letter'>
                                            <i className={this.props.fontA}></i>
                                        </span>
                                    </span>
                                : ReactHtmlParser(this.renderLetters(this.props.word))}
                        </Link> 
                    :   null}
                {this.props.static 
                    ?   <span>
                            {ReactHtmlParser(this.renderLetters(this.props.word))}
                        </span> 
                    :   null}
                {this.props.catagory 
                    ?   <span  
                            onClick={() => this.props.navigate(this.props.catagory, this.props.pageNum)}>
                            {this.props.icon 
                                ?   <span className='word'>
                                        <span className='letter'>
                                            <i className={this.props.fontA}></i>
                                        </span>
                                    </span>
                                : ReactHtmlParser(this.renderLetters(this.props.word))}
                        </span>
                    : null}
            </LetterBoxStringDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    requireUpdate
}
export default connect(mapStateToProps, mapDispatchToProps)(LetterBoxString);

const LetterBoxStringDiv = styled.div`
    background: #FFFFFF;
    a {
        text-decoration: none;
    }
    .word {
        text-decoration: none;
        width: 100%;
        font-family: 'Staatliches', Arial, Helvetica, sans-serif;
        margin: 0 8px;
        justify-content: center;
        align-items: center;
        color: black;
        @media (max-width: 500px) {
            margin-right: 5px;
        }
        :hover {
            background: orange;
            cursor: pointer;
        }
        .letter {
            background: ${(props) => {
                if(props.highlight){
                    return '#FFFF66'
                } else {
                    return '#FFFFE0'
                }
            }};
            padding: 2px;
            color: black;
            border: 1px solid gray;
            height: 100%;
            font-size: 5vw;
            @media (min-width: 500px) {
                font-size: 4vw;
            }
            @media (min-width: 1000px) {
                font-size: 3vw;
            }
        }
}
`