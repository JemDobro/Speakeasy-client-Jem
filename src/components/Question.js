import React from 'react';
import {connect} from 'react-redux';

export class Question extends React.Component {
     
    render() {
      console.log(`In render`, this.props)
      if (this.props.questions.length < 1) {
          return <div>Loading...</div>
      }
      return (
          <div className="question">
            <p>{`Question: ${this.props.questions[this.props.currQuestionIndex].question /*[this.props.currQuestion]*/}`}</p>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
      questions: state.questions.questions,
      currQuestionIndex: state.questions.currQuestionIndex
      // currQuestion: state.score.currQuestion,
      // question: `${currentUser.questions[currentUser.head].question}`
  };
};

export default connect(mapStateToProps)(Question);


