import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {required, nonEmpty} from '../validators';
import { submitAnswer} from '../actions/questions';

export class AnswerSubmitForm extends React.Component {
    onSubmit(values) {
        console.log(values);
        return this.props.dispatch(submitAnswer(values))
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="answer-submit-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="answer">Your answer:</label>
                <Field
                    component={Input}
                    type="text"
                    name="answer"
                    id="answer"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        question: state.questions.question
    };
  };

export default connect(mapStateToProps)(reduxForm({
    form: 'AnswerSubmitForm',  
    onSubmitFail: (errors, dispatch) =>
      dispatch(focus('AnswerSubmitForm', Object.keys(errors)[0]))
  })(AnswerSubmitForm));
