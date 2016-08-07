/**
 * Главная страница
 */
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import SigninForm, { fields } from '../../containers/signin-form';

export default class MainPage extends Component {
    render() {
        console.log('>>', this.props.page);
        let fn = (data, data2, data3) => { console.log('Сабмит 2 %o %o %o ', data, data2, data3); };
        return <div className='main-page'>
            <Grid >
                <SigninForm fields={fields} onSubmit={this::fn} submitting={false} />
            </Grid>
        </div>;
    }
}

