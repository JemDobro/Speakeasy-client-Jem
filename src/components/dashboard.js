import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './RequiresLogin';
import Question from './Question';
import Answer from './Answer';

export class Dashboard extends React.Component {

    render() {
        
        return (
            <div className="dashboard">
                <h2>{`Hello ${this.props.firstName}, welcome to the club...`}</h2>
                <Question />
                <Answer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        firstName: `${currentUser.firstName}`
    };
};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));
