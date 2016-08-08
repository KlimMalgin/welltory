/**
 * Форма авторизации
 */

import React, { Component } from 'react'
import { FormControl, Button } from 'react-bootstrap';


export default class SigninForm extends Component {
    
    state = {
        email: '',
        password: ''
    }
    
    changeEmail(e) {
        this.setState({email: e.target.value});
    }
    
    changePassword(e) {
        this.setState({password: e.target.value});
    }
    
    render() {
        return <form className='signin-form'>
            <h2>Авторизация</h2>
            <FormControl type='email' placeholder='Email' className='signin-form__field' value={this.state.email} onChange={this::this.changeEmail} />
            <FormControl type='password' placeholder='Password' className='signin-form__field' value={this.state.password} onChange={this::this.changePassword} />
            <Button className='btn btn-lg btn-primary btn-block signin-form__btn' disabled={this.props.data.progress} onClick={() => { this.props.onSubmit(this.state.email, this.state.password)} }>Войти</Button>
        </form>
    }
}
