import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import merge from 'merge';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import injectTapEventPlugin from 'react-tap-event-plugin';

import * as actions from '../actions'

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    //props.actions.auth.getCsrf();
    //props.actions.auth.signin('testfront@welltory.com', 'testwell');
  }
  
  
  childrenActions () {
    return merge(
      this.props.actions.tools,
      this.props.actions.list,
      this.props.actions.auth
    );
  }
  
  /**
   * Вернет объект с состоянием текущей страницы и смержеными 
   * в него доп. данными. Например, состояние форм на странице 
   */
  childrenData () {
    return {
      // Данные стора для текущей страницы
      data: merge(this.props.tools, this.props.auth, this.props.list),
      // Состояние форм
      form: this.props.form
    };
  }
  
  render() {
    return <div className='app'>
      <Navbar fixedTop fluid className='header'>
        <Nav pullRight>
          <NavItem eventKey={1} className='header__user-name'>{this.props.auth.authorize ? 'Username' : 'Anonymous'}</NavItem>
        </Nav>
      </Navbar>
      {React.cloneElement(this.props.children, { actions: this.childrenActions(), page: this.childrenData() })}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    tools: state.tools,
    auth: state.auth,
    list: state.list,
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      list: bindActionCreators(actions.list, dispatch),
      auth: bindActionCreators(actions.auth, dispatch),
      tools: bindActionCreators(actions.tools, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
