import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './content';
import Home from './home';
import Info from './info';

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <Content>
          <Switch>
            <Route path="/home1" render={() => <Home>
              <Route path="/home1/:id" component={Info}></Route>
            </Home> } />
            <Route path="/about1" component={() => <div>about yourself1</div>} />
            <Route path="/person1" component={() => <div>one person1</div>} />
            <Route component={() => <div>页面走丢了</div>}></Route>
          </Switch>
        </Content>
      </Router>
    )
  }
}