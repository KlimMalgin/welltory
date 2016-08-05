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
                <SigninForm />
            </Grid>
        </div>;
    }
}

