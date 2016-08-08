/**
 * Страница со списком замеров
 */

import React, { Component } from 'react'
import List from '../../components/list';

export default class ListPage extends Component {
    constructor(props) {
        super(props);
        props.actions.getList();
    }
  
    render() {
        return <div className='list-page'>
            <h1>Замеры</h1>
            <List />
        </div>
    }
}
