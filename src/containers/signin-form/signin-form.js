/**
 * Форма авторизации
 */

import React, { Component } from 'react'
import { FormControl, Button } from 'react-bootstrap';

export default class SigninForm extends Component {
    render() {
        return <form className='signin-form'>
            <h2>Авторизация</h2>
            <FormControl type='email' placeholder='Email' className='signin-form__field' />
            <FormControl type='password' placeholder='Password' className='signin-form__field' />
            <Button className='btn btn-lg btn-primary btn-block signin-form__btn'>Войти</Button>
        </form>
    }
}
