import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestion} from '../actions/questions';

export class Feedback extends React.Component {
  
  render() {
    if (this.props.answerResult === 'correct') {
      return (
        <section className="feedback-correct">
          <p>{`You answered: ${this.props.answer}.`}</p>
          <p>You are correct - you just upped your stats and your status!</p>
          <p>Keep Going!</p>
          <button className="game-btn" onClick={() => this.props.dispatch(fetchQuestion())}>Next</button>        
        </section>)
    } else if (this.props.answerResult === 'incorrect') {
      return (
        <section className="feedback-incorrect">
          <p>{`You answered: ${this.props.answer}.`}</p>
          <p>{`The correct answer is: ${this.props.correctAnswer}.`}</p>
          <p>Let's try another one!</p>
          <button className="game-btn" onClick={() => 
            this.props.dispatch(fetchQuestion())
            }>Next</button>        
        </section>
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