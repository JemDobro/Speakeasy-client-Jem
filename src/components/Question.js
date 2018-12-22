import React from 'react';
import {connect} from 'react-redux';

export class Question extends React.Component {
     
    render() {
      console.log(`In render`, this.props);
      if (this.props.question.length < 1) {
          return <div>Loading...</div>
      }
      return (
          <div className="question">
            <p>{`Question: ${this.props.question}`}</p>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
      question: state.questions.question
  };
};

export default connect(mapStateToProps)(Question);


