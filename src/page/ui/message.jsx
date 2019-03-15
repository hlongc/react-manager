import React from 'react';
import { Card, Button, message } from 'antd';
import './ui.less'
export default class Buttons extends React.Component {
  handleClick = (type) => {
    message[type]('这是message弹出框')
  }
  render() {
    return (
      <div>
        <Card title="message弹出框" className="card-wrapper">
          <Button type="primary" onClick={() => this.handleClick('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleClick('error')}>error</Button>
          <Button type="primary" onClick={() => this.handleClick('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleClick('warning')}>warning</Button>
          <Button type="primary" onClick={() => this.handleClick('loading')}>loading</Button>
        </Card>
      </div>
    )
  }
}