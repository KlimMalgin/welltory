import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import './styles/app.less';
import App from './components/app';
import NotFoundPage from './pages/not-found-page';
import MainPage from './pages/main-page';
import ListPage from './pages/list-page';

import configureStore from './store/configure-store'; 
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={MainPage} />
        <Route path='/main' component={MainPage} />
        <Route path='/list' component={ListPage} />
        { /* <Route path='/user/:userId/content/:contentId' component={UserPage} /> */ }
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('application')
)
