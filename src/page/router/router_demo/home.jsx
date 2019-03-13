import React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/person">person</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={() => <div>home</div>} />
          <Route exact path="/about" component={() => <div>about yourself</div>} />
          <Route exact path="/person" component={() => <div>one person</div>} />
        </div>
      </HashRouter>
    )
  }
}