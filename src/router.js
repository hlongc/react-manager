import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './page/login';
import Home from './page/home';
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import Loadings from './page/ui/loadings';
import Notice from './page/ui/notice';
import Message from './page/ui/message';
import Tabs from './page/ui/tabs';
import Gallery from './page/ui/gallery';
import Carousel from './page/ui/carousel';
import FormLogin from './page/Form/login';
import RegisterForm from './page/Form/register';
import BasicTable from './page/table/basic';
import HighTable from './page/table/high';
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
                <Route path="/admin/home" component={Home} />
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route path="/admin/ui/loadings" component={Loadings} />
                <Route path="/admin/ui/notification" component={Notice} />
                <Route path="/admin/ui/messages" component={Message} />
                <Route path="/admin/ui/tabs" component={Tabs} />
                <Route path="/admin/ui/gallery" component={Gallery} />
                <Route path="/admin/ui/carousel" component={Carousel} />
                <Route path="/admin/form/login" component={FormLogin} />
                <Route path="/admin/form/reg" component={RegisterForm} />
                <Route path="/admin/table/basic" component={BasicTable} />
                <Route path="/admin/table/high" component={HighTable} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
        </App>
      </HashRouter>
    )
  }
}