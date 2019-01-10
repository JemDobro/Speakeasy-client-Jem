import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {clearSession} from '../actions/questions';
import Input from './Input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))      
            .then(() => this.props.dispatch(login(username, password)))
            .then(() => this.props.dispatch(clearSession())) //hides reg form and info, done before server response comes back
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <section className="form-error" aria-live="polite">
                    {this.props.error}
                </section>
            );
        }
        
        return (
            <section className='reg-section'>
                <h2>You're almost in! Register here to become one of the club</h2>                
                <form
                    className="reg-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <label htmlFor="firstName">First name</label>
                    <Field 
                        component={Input}
                        type="text" 
                        name="firstName"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="lastName">Last name</label>
                    <Field 
                        component={Input} 
                        type="text" 
                        name="lastName" 
                    />
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
                </form>  
            </section>       
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
