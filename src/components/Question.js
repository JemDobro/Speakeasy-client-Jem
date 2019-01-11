import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestion} from '../actions/questions';

export class Question extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuestion());
  }
   
  render() {
    if (this.props.question.length < 1) {
      return <section className="question">Loading...</section>
    }
    return (
      <section className="question">
      <p>{`Question: ${this.props.question}`}</p>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    question: state.questions.question
  };
};

export default connect(mapStateToProps)(Question);


