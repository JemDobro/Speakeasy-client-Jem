import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/questions';


export class Question extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.dispatch(fetchQuestions())
    }
  
    render() {
      console.log(`In render`, this.props)
      if (this.props.questions.length < 1) {
          return <div>Loading...</div>
      }
      return (
          <div className="question">
            <p>{`Question: ${this.props.questions[0].question /*[this.props.currQuestion]*/}`}</p>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
      questions: state.questions.questions,
      // currQuestion: state.score.currQuestion,
      // question: `${currentUser.questions[currentUser.head].question}`
  };
};

export default connect(mapStateToProps)(Question);


