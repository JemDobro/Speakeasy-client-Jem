import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './LoginForm';
import Info from './Info';
import RegistrationForm from './RegistrationForm';
import {toggleRegForm} from '../actions/questions';
import '../styles/landingPage.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    if (props.loggedOut) {
        return <Redirect to="/loggedOut" />;
    }
    let regFormButton = (
        <button className='reg-form-btn' onClick={() => props.dispatch(toggleRegForm())}>Become one of the club</button>
    );
    let info;
    if (props.wantsInfo) {
        info = <Info />;
    }
    let regForm;
    let loginForm = <LoginForm />;
    let loginImg = <img className='login-img' src='https://res.cloudinary.com/cozyspaces/image/upload/c_scale,w_546/v1547078600/yellow-door2.jpg' alt='closed yellow door with viewing hole' />;
    let regImg;
    if (props.showRegForm) {
        regImg = <img className='reg-img' src='https://res.cloudinary.com/cozyspaces/image/upload/c_scale,w_546/v1547063030/come-hang-out.jpg' alt='yellow wall that says, "come hangout" with an arrow pointing to the right around the corner of a blue wall' />;
        regForm = <RegistrationForm />;
        loginImg = null;
        loginForm = null;
        regFormButton = (
            <button className='reg-form-btn' onClick={() => props.dispatch(toggleRegForm())}>I'm already a member</button>
        );
    }

    return (
        <main role="main" className="home">
            {info}
            <h2 className="greeting">Welcome to Speakeasy... do you know the secret knock?</h2>
            {loginImg}
            {loginForm}
            <p>Do you find yourself nodding along with your smart tech friends, coworkers, or worse, your boss, as if you understand the latest tech jargon? All the while, secretly hoping that you won't have to feign choking on your drink if someone asks you a question? Are you yearning to get into the club but can't quite follow the conversation? Step into Speakeasy to learn the language through spaced repetition, up your stats and your status as you keep up to date with all the latest secret knocks that open doors... </p>
            <p className="demoUser">**We recommend you create an account to start from zero questions answered and personalize the spaced repetition to you, but if you'd just like to take a test run, feel free to login with:</p>
            <p>Username: ellafitzgerald</p>
            <p>Password: ellafitzgerald</p>
            {regFormButton}
            {regImg}
            {regForm}
        </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loggedOut: state.auth.loggedOut,
    wantsInfo: state.questions.wantsInfo,
    showRegForm: state.questions.showRegForm
});

export default connect(mapStateToProps)(LandingPage);
