import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin';

import * as actions from '../actions'

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

class App extends Component {
  
  childrenActions () {
    return this.props.actions.tools;
  }
  
  /**
   * Вернет объект с состоянием текущей страницы и смержеными 
   * в него доп. данными. Например, состояние форм на странице 
   */
  childrenData () {
    return {
      // Данные стора для текущей страницы
      data: this.props.tools,
      // Состояние форм
      form: this.props.form
    };
  }
  
  render() {
    return <div className='app'>
      {React.cloneElement(this.props.children, { actions: this.childrenActions(), page: this.childrenData() })}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    tools: state.tools,
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      tools: bindActionCreators(actions.tools, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
