import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected-data';

export class Question extends React.Component {
  componentDidMount() {
      console.log(this.props);
      this.props.dispatch(fetchProtectedData());
  }

  render() {
      console.log(`In render`, this.props)
      if (this.props.protectedData.length < 1) {
          return <div>Loading...</div>
      }
      return (
          <div className="question">
            <p>{`Question: ${this.props.protectedData[1].question /*[this.props.currQuestion]*/}`}</p>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
      protectedData: state.protectedData.data,
      // currQuestion: state.score.currQuestion,
      // question: `${currentUser.questions[currentUser.head].question}`
  };
};

export default connect(mapStateToProps)(Question);


