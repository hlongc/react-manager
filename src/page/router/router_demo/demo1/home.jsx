import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p>这里是home路由组件</p>
        <hr/>
        <p>这里是我的子组件</p>
        <ul>
          <li><Link to="/home1/one">第一个子路由</Link></li>
          <li><Link to="/home1/two">第二个子路由</Link></li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}