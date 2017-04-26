import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Redirect } from 'react-router';

import Thread from './Thread.jsx';
import ThreadList from './ThreadList.jsx';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <Route exact path="/" component={ThreadList} />
          <Redirect from="/thread" to="/" />
          <Route path="/thread/:id" component={Thread} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

