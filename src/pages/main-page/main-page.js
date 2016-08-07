/**
 * Главная страница
 */
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import SigninForm from '../../containers/signin-form';

export default class MainPage extends Component {
    render() {
        return <div className='main-page'>
            <Grid >
                <SigninForm onSubmit={(email, pwd) => {console.log('onSubmit: %o %o', email, pwd);}} />
            </Grid>
        </div>;
    }
}

