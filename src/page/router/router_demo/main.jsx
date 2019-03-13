import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Content from './content';

export default class Home extends React.Component {
  render() {
    return (
      <Router>
        <Content>
          <Route exact path="/home" component={() => <div>home1</div>} />
          <Route path="/about1" component={() => <div>about yourself1</div>} />
          <Route path="/person1" component={() => <div>one person1</div>} />
        </Content>
      </Router>
    )
  }
}