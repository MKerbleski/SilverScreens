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
        e.preventDefault();
        this.props.requireUpdate();
    }

    renderLetters(string){
        let htmlString = '<span class="word">';
        for (let i = 0; i < string.length; i++){
            let next = `<span letter=${string[i]} class="letter">${string[i]}</span>`
            htmlString += next
        }
        htmlString+='</span>'
        return htmlString
    }

    render(){
        return(
            <LetterBoxStringDiv 
                className='line'
                highlight={this.props.highlight}
                // catagory={this.props.catagory}
                // selectedCatagory={this.props.selectedCatagory}
                onClick={(e) => this.clickHandler(e)}> 
                    <Link
                        to={this.props.url}>
                        {ReactHtmlParser(this.renderLetters(this.props.word))}
                    </Link>
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
    background: black;
    line-height: 25px;
    .word {
        /* background: orange; */
        .letter {
            background: red;
            background: ${(props) => {
                if(props.highlight){
                    return '#FFFF66'
                } else {
                    return '#FFFFE0'
                }
            }};
            margin: 1px;
            padding: 2px;
            color: black;
            border: 1px solid gray;
            bottom: 1px;
        }
}
`