import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Question from './Question.jsx'

export default class QuestionList extends Component {
    render(){
        console.log(this.props.questions)

        return (
                <div className = "row">
                    
                    {
                        this.props.questions.map((q) => {
                            if (q.id == this.props.current) {
                                return(
                                    
                                        <Question {...this.props} question = {q} key = {q.id} />
                                    
                                )
                            }
                        })
                    }
                    
                </div>
        )
    }



}