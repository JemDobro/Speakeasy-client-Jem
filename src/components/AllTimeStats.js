import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import requiresLogin from './requires-login';
import {fetchAllTimeStats} from '../actions/allTimeStats';

export class AllTimeStats extends React.Component {
  componentDidMount() {
      this.props.dispatch(fetchAllTimeStats());
  } 

  render() {
    if (!this.props.wantsAllTimeStats) {
      return <Redirect to="/dashboard" />;
    };

    let percentage;
    if (this.props.allTimeAttempted > 0) {
      percentage = (
        <p>{`${Math.round((this.props.allTimeCorrect/this.props.allTimeAttempted * 100) * 100)/100}% Correct!`}</p>
      )
    }
        
    return (        
        <section className="allTimeStats">
          <h2>ALL TIME STATS</h2>
          <p>{`All Time Attempted: ${this.props.allTimeAttempted}`}</p>
          <p>{`All Time Correct: ${this.props.allTimeCorrect}`}</p>
          {percentage}
        </section>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  if (currentUser !== null) {
    return {
      allTimeAttempted: state.allTimeStats.allTimeAttempted,
      allTimeCorrect: state.allTimeStats.allTimeCorrect,
      wantsAllTimeStats: state.allTimeStats.wantsAllTimeStats
    };
  }
};

export default requiresLogin()(connect(mapStateToProps)(AllTimeStats));