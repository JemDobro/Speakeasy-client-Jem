import React from 'react';
import {connect} from 'react-redux';

export class SessionStats extends React.Component {
  
    render() {
     
      return (
          <div className="sessionStats">
            <p>{`${Math.round((this.props.questionsAnsweredCorrectly/this.props.totalQuestionsAnswered * 100) * 100)/100}%!  You've answered: ${this.props.questionsAnsweredCorrectly} out of ${this.props.totalQuestionsAnswered} questions correctly!`}</p>
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