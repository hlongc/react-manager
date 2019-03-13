import React from 'react';
import { Link } from 'react-router-dom';

export default class Info extends React.Component {
  render() {
    return (
      <div>
        <p>{ this.props.match.params.id }</p>
      </div>
    )
  }
}