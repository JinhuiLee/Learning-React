import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import QuestionList from './components/QuestionList.jsx'
import ScoreBox from './components/ScoreBox.jsx'
import Result from './components/Result.jsx'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [
                {
                    id:1,
                    text: "what is your name?",
                    choices: [
                        {
                            id:'a',
                            text:'Michael'
                        },
                        {
                            id:'b',
                            text:'Bob'
                        },
                        {
                            id:'c',
                            text:'Chii'
                        },
                        {
                            id:'d',
                            text:'Steven'
                        },
                    ],
                    correct: 'b'
                },
                {
                    id:2,
                    text: "what is your best friend's name?",
                    choices: [
                        {
                            id:'a',
                            text:'Michael'
                        },
                        {
                            id:'b',
                            text:'Bob'
                        },
                        {
                            id:'c',
                            text:'Chii'
                        },
                        {
                            id:'d',
                            text:'Steven'
                        },
                    ],
                    correct: 'b'
                },
                {
                    id:3,
                    text: "what is your father's name?",
                    choices: [
                        {
                            id:'a',
                            text:'Michael'
                        },
                        {
                            id:'b',
                            text:'Bob'
                        },
                        {
                            id:'c',
                            text:'Chii'
                        },
                        {
                            id:'d',
                            text:'Steven'
                        },
                    ],
                    correct: 'c'
                },
                {
                    id:4,
                    text: "what is your mother's name?",
                    choices: [
                        {
                            id:'a',
                            text:'Michael'
                        },
                        {
                            id:'b',
                            text:'Bob'
                        },
                        {
                            id:'c',
                            text:'Chii'
                        },
                        {
                            id:'d',
                            text:'Steven'
                        },
                    ],
                    correct: 'a'
                }
            ],
            score:0,
            current:1
        }

    }

    setCurrent(current) {
        this.setState({current})
    }

    setScore(score) {
        this.setState({score})
    }


    render(){
        if (this.state.current > this.state.questions.length) {
            var scorebox = ''
            var result = <Result {...this.state}/>
        } else {
            var scorebox = <ScoreBox {...this.state}/>
            var result = ''
        }


        return (<div>
            {result}
            {scorebox}
            
            <QuestionList {...this.state} setCurrent = {this.setCurrent.bind(this)} setScore = {this.setScore.bind(this)}/>
            </div>)
    }



}