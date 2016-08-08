/**
 * Главная страница
 */
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import SigninForm from '../../components/signin-form';

export default class MainPage extends Component {
    
    handleSubmit(email, pwd) {
        this.props.actions.signin(email, pwd);
    }
    
    render() {
        return <div className='main-page'>
            <Grid >
                <SigninForm data={this.props.page.data} onSubmit={this::this.handleSubmit} />
            </Grid>
        </div>;
    }
}

