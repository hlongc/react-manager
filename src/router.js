import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './page/login';
import Buttons from './page/ui/buttons';
import NoMatch from './page/nomatch';

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() => 
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
        </App>
      </HashRouter>
    )
  }
}