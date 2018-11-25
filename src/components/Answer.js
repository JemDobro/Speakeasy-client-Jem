import React from 'react';
import {connect} from 'react-redux';
import AnswerSubmitForm from './AnswerSubmitForm';
import Feedback from './Feedback';

export class Answer extends React.Component {
  
    render() {
      if (this.props.answer !== null) {
        return <Feedback />
      }
      return <AnswerSubmitForm />
  }
}

const mapStateToProps = state => {
  return {
      answer: state.questions.answer
  };
};

export default connect(mapStateToProps)(Answer);