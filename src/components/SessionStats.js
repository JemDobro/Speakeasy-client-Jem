import React from 'react';
import {connect} from 'react-redux';
import {resetSession} from '../actions/questions';

export class SessionStats extends React.Component {
  
  render() {
    if (this.props.totalQuestionsAnswered === 0) {
      return null
    }
    if (Math.round((this.props.questionsAnsweredCorrectly/this.props.totalQuestionsAnswered * 100) * 100)/100 < 10) {
      return (
        <div className="sessionStats">
          <p>{`${Math.round((this.props.questionsAnsweredCorrectly/this.props.totalQuestionsAnswered * 100) * 100)/100}% so far. You've answered: ${this.props.questionsAnsweredCorrectly} out of ${this.props.totalQuestionsAnswered} questions correctly.  Keep going!`}</p>
          <button onClick={() => 
            this.props.dispatch(resetSession())
            }>Reset Session</button>  
        </div>
      )
    }
    return (
        <div className="sessionStats">
          <p>{`${Math.round((this.props.questionsAnsweredCorrectly/this.props.totalQuestionsAnswered * 100) * 100)/100}%!  You've answered: ${this.props.questionsAnsweredCorrectly} out of ${this.props.totalQuestionsAnswered} questions correctly!`}</p>
          <button onClick={() => 
            this.props.dispatch(resetSession())
            }>Reset Session</button> 
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      questionsAnsweredCorrectly: state.questions.questionsAnsweredCorrectly,
      totalQuestionsAnswered: state.questions.totalQuestionsAnswered
  };
};

export default connect(mapStateToProps)(SessionStats);