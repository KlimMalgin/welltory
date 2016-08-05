import React, { Component } from 'react';
import classNames from 'classnames';


export default class Tools extends Component {

    render() {
        // const { actions, data } = this.props;
        // Стиль базового элемента
        const toolsCls = classNames({
          tools: true,
          some_class: false
        });
        return <div className={toolsCls}>
          some tools
        </div>    
    }

}
