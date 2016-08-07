/**
 * Форма авторизации
 */

import React, { Component, PropTypes } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';

export const fields = [ 'email', 'password' ];

class SigninForm extends Component {
    render() {
        let { 
            fields: { email, password },
            submitting, 
            handleSubmit
        } = this.props;
        return <form className='signin-form' onSubmit={handleSubmit}>
            <h2>Авторизация</h2>
            <FormControl type='email' className='signin-form__field' {...email} />
            <FormControl type='password' className='signin-form__field' {...password} />
            <Button className='btn btn-lg btn-primary btn-block signin-form__btn' type='submit' disabled={submitting}>Войти</Button>
        </form>;
    }
}

SigninForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'signinform',
  fields
})(SigninForm);