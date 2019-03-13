import React from 'react';
import Child from './Child';
import Clock from './Clock';
import Form from './Form';
import { Button } from 'antd';
import './life.less';

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleAdd = () => {
    this.setState((state, props) => ({
      count: state.count + 1
    }))
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <p className="life-title">react生命周期介绍</p>
        <Button onClick={this.handleAdd}>arrow</Button>
        <Button onClick={this.handleClick.bind(this)}>bind</Button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
        <Clock />
        <Form />
      </div>
    )
  }

}