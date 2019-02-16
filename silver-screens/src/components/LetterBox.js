import React , { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux';
import { 
    requireUpdate
} from '../actions'

class LetterBox extends Component {
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
        // console.log(htmlString)
        return htmlString
    }

    render(){
        console.log(this.props)
        return(
            <LetterBoxDiv 
                catagory={this.props.catagory}
                selectedCatagory={this.props.selectedCatagory}
                onClick={(e) => this.clickHandler(e)}> 
                    <Link  
                        // style={{background: this.props.selectedCatagory === this.props.catagory.url ? 'yellow': null}} 
                        catagory={this.props.catagory} 
                        to={`/sort/${this.props.catagory.url}`}>
                        {ReactHtmlParser(this.renderLetters(this.props.catagory.name))}
                    </Link> 
                    {/* {this.props.catagory.name.split(' ').forEach(word => {
                        console.log(word)
                        let htmlString = this.renderLetters(word)
                        console.log(htmlString)
                        return <span>{ReactHtmlParser(htmlString)}</span>
                    })} */}
            </LetterBoxDiv>
        )
    }
}

const mapStateToProps = store => {
    return { store: store };
}

const mapDispatchToProps = {
    requireUpdate
}
export default connect(mapStateToProps, mapDispatchToProps)(LetterBox);

const LetterBoxDiv = styled.div`
    border: 1px solid green;
    background: black;
    .word {
        /* background: orange; */
        .letter {
            background: red;
            background: ${(props) => {
                if(props.catagory.url === props.selectedCatagory){
                    return 'yellow'
                } else {
                    return 'white'
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