import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class ScoreBox extends Component {
    
    render(){
        const {question} = this.props;
        return (
            <div className = "row">
                <div className="well">
                    Question {this.props.current} out of {this.props.questions.length}
                    <span className="pull-right">
                        <strong> Score {this.props.score}</strong>
                    </span>
                </div>
            </div>
        )
    }



}