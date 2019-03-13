import React from 'react';
import { Link } from 'react-router-dom';

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home1">home1</Link></li>
          <li><Link to="/about1">about1</Link></li>
          <li><Link to="/person1">person1</Link></li>
          <li><Link to="/no">不存在</Link></li>
        </ul>
        <hr/>
        { this.props.children }
      </div>
    )
  }
}