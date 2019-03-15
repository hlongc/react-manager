import React from 'react';
import { Card, Button, Alert, Spin } from 'antd';
import './ui.less'
export default class Loadings extends React.Component {
  render() {
    return (
      <div>
        <Card title="spin" className="card-wrapper">
          <Spin size="small"/>
          <Spin/>
          <Spin size="large"/>
        </Card>
        <Card title="alert">
          <Alert type="warning" message="提示信息" description="这是很多的提示信息文字哦" />
        </Card>
        <Card title="span + alert" className="card-wrapper">
          <Spin>
            <Alert type="info" message="提示信息" description="这是很多的提示信息文字哦" />
          </Spin>
        </Card>
        <Card title="span + alert" className="card-wrapper">
          <Spin tip="加载中...">
            <Alert type="success" message="提示信息" description="这是很多的提示信息文字哦" />
          </Spin>
        </Card>
      </div>
    )
  }
}