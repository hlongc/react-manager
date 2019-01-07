import React from 'react';
import Child from './Child';
import Clock from './Clock';

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
        <p>react生命周期介绍</p>
        <button onClick={this.handleAdd}>arrow</button>
        <button onClick={this.handleClick.bind(this)}>bind</button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
        <Clock />
      </div>
    )
  }

}