import React from 'react';
import {connect} from 'react-redux';
import {clearSession} from '../actions/questions';
import {toggleAllTimeStats, clearAllTimeStats} from '../actions/allTimeStats';
import {clearAuth, toggleLoggedOut} from '../actions/auth';
import {toggleWantsInfo} from '../actions/questions';
import {clearAuthToken} from '../local-storage';
import '../styles/headerBar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAllTimeStats());
    this.props.dispatch(clearSession());
    this.props.dispatch(clearAuth());
    this.props.dispatch(toggleLoggedOut());
    clearAuthToken();
  }

  render() {
    let logOutButton;
    let allTimeStatsButton;
    let greeting;
    let infoButton = (
      <button className="header-btn" onClick={() => this.props.dispatch(toggleWantsInfo())}>About</button>
    );
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="header-btn" onClick={() => this.logOut()}>Log out</button>
      );
      allTimeStatsButton = (
        <button className="header-btn" onClick={() => this.props.dispatch(toggleAllTimeStats())}>All Time Stats</button>
      );
      greeting = (
        <h2 className="greeting">{`Hello ${this.props.firstName}, welcome to the club...`}</h2>
      );
    }
    if (this.props.loggedOut) {
      infoButton = null;
    }

    return (
      <header role="banner">
        <img className='header-bar-img' src='https://res.cloudinary.com/cozyspaces/image/upload/c_scale,h_300/v1547516442/speakeasy-logo.png' alt='Speakeasy logo' />
        {infoButton}
        {allTimeStatsButton}                
        {logOutButton}
        {greeting}
      </header>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  if (currentUser !== null) {
    return {
      loggedIn: state.auth.currentUser !== null,
      firstName: `${currentUser.firstName}`,
      wantsAllTimeStats: state.allTimeStats.wantsAllTimeStats
    }
  }
  return {
    loggedIn: state.auth.currentUser !== null,
    loggedOut: state.auth.loggedOut
  };
};

export default connect(mapStateToProps)(HeaderBar);
