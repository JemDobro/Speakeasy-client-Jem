import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Question from './Question';
import Answer from './Answer';
import SessionStats from './SessionStats';

export class Dashboard extends React.Component {
    
    render() {
        
        return (
            <div className="dashboard">
                <h2>{`Hello ${this.props.firstName}, welcome to the club...`}</h2>
                <Question />
                <Answer />
                <SessionStats />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        firstName: `${currentUser.firstName}`,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
