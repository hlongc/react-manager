import React from 'react';
import { Card, Button, notification } from 'antd';
import './ui.less'
export default class Loadings extends React.Component {
  handleClick = (type, placement = 'topRight') => {
    notification[type]({
      message: '工资到账',
      description: '上个月补贴2400块，实发工资2500块，感谢你的付出!',
      placement
    })
  }
  render() {
    return (
      <div>
        <Card title="四种类型的notice" className="card-wrapper">
          <Button type="primary" onClick={() => this.handleClick('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleClick('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleClick('warning')}>warning</Button>
          <Button type="danger" onClick={() => this.handleClick('error')}>error</Button>
        </Card>
        <Card title="四个方向" className="card-wrapper">
          <Button type="primary" onClick={() => this.handleClick('success', 'topLeft')}>左上</Button>
          <Button type="primary" onClick={() => this.handleClick('info', 'topRight')}>右上</Button>
          <Button type="primary" onClick={() => this.handleClick('warning', 'bottomLeft')}>左下</Button>
          <Button type="primary" onClick={() => this.handleClick('error', 'bottomRight')}>右下</Button>
        </Card>
      </div>
    )
  }
}