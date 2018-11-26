import React from 'react';
import {connect} from 'react-redux';

export class Feedback extends React.Component {
    componentDidMount() {
        console.log('feedback component mounted');
    }
  
    render() {
        if (this.props.answerResult === 'correct') {
            return (
                <div className="feedback-correct">
                    <p>{`You answered: ${this.props.answer}.`}</p>
                    <p>You are correct - you just upped your stats and your status!  Keep Going!</p>        
                </div>)
        } else if (this.props.answerResult === 'incorrect') {
            return (
                <div className="feedback-incorrect">
                <p>{`You answered: ${this.props.answer}.`}</p>
                <p>{`The correct answer is: ${this.props.correctAnswer}.  Let's try another one!`}</p>        
                </div>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = state => {
  return {
      answer: state.questions.answer,
      correctAnswer: state.questions.correctAnswer,
      answerResult: state.questions.answerResult
  };
};

export default connect(mapStateToProps)(Feedback);