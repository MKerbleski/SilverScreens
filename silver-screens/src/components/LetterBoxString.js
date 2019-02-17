import React , { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux';
import { 
    requireUpdate
} from '../actions'

class LetterBoxString extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    clickHandler(e){
        console.log('clickHandler')
        e.preventDefault();
        this.props.requireUpdate();
    }

    renderLetters(string){
        // console.log(string)
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
                className='word'
                highlight={this.props.highlight}
                onClick={this.props.url ? (e) => this.clickHandler(e) : null}> 
                {this.props.mag 
                    ?   <span className='word'>
                            <span className='letter'>
                                <i class="fas fa-search"></i>
                            </span>
                        </span> 
                    :   null}
                {this.props.url 
                    ?   <Link
                            to={this.props.url}>
                            {ReactHtmlParser(this.renderLetters(this.props.word))}
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
                            {ReactHtmlParser(this.renderLetters(this.props.word))}
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
    /* border: 1px solid green; */
    background: #FFFFFF;
    /* background: black; */
    /* line-height: 25px; */
    .word {
        /* background: orange; */
        text-decoration: none;
        width: 100%;
        /* border: 1px solid green; */
        /* border-bottom: 1px solid black; */
        /* border-top: 1px solid black; */
        font-family: 'Staatliches', Arial, Helvetica, sans-serif;
        /* margin-left: 10px; */
        margin-right: 15px;
        /* display: flex; */
        justify-content: center;
        align-items: center;
        text-align: center;
        color: black;
        height: auto;
        :hover{
            cursor: pointer;
        }
        a {
            text-decoration: none;
        }
        .letter {
            background: red;
            background: ${(props) => {
                if(props.highlight){
                    return '#FFFF66'
                } else {
                    return '#FFFFE0'
                }
            }};
            /* margin: 1px; */
            padding: 2px;
            color: black;
            border: 1px solid gray;
            bottom: 1px;
            height: 25px;
        }
}
`