import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {toggleLoggedOut} from '../actions/auth';

export function LoggedOut(props) {  

  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  if (!props.loggedOut) {
    return <Redirect to="/" />;
  }

  return (
    <main  className="loggedOut" role="main">        
    <h2>You have successfully logged out. See you again soon... Cheers!</h2>
    <button onClick={() => 
      props.dispatch(toggleLoggedOut())
      }>Log in again</button>        
    </main>
  );
  
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  loggedOut: state.auth.loggedOut
});

export default connect(mapStateToProps)(LoggedOut);