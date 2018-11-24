import React from 'react';
import {connect} from 'react-redux';
// import {fetchQuestions} from '../actions/questions';


export class Feedback extends React.Component {
    componentDidMount() {
        console.log('feedback component mounted');
    }
  
    render() {
      // console.log(`In render`, this.props)
      // if (this.props.questions.length < 1) {
      //     return <div>Loading...</div>
      // }
      return (
          <div className="feedback">
            <p>{`You answered: ${this.props.answer}`}</p>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
      answer: state.questions.answer
  };
};

export default connect(mapStateToProps)(Feedback);