import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, /*focus*/} from 'redux-form';
import Input from './Input';
import {required, nonEmpty} from '../validators';
import { submitAnswer, incorrectAnswer, correctAnswer } from '../actions/questions';

export class AnswerSubmitForm extends React.Component {
    onSubmit(values) {
        console.log(values, this.props.questions[0].id)
        return this.props.dispatch(submitAnswer(values, this.props.questions[0].id))
        .then((res) => {
            // if (res.memoryStrength === 1) {
            //     return this.props.dispatch(incorrectAnswer(res.answer))
            // } else {
            //     return this.props.dispatch(correctAnswer(res.answer))
            // }
            console.log(res);
        })
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
        questions: state.questions.questions
    };
  };

export default connect(mapStateToProps)(reduxForm({
    form: 'AnswerSubmitForm',
  
    // onSubmitFail: (errors, dispatch) =>
    //   dispatch(focus('AnswerSubmitForm', Object.keys(errors)[0]))
  })(AnswerSubmitForm));
