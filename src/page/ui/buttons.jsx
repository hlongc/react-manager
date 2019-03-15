import React from 'react';
import { Card, Button, Radio } from 'antd';
import './ui.less'
export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, size: 'default' }
  }
  cancelLoading = () => {
    this.setState({ loading: !this.state.loading })
  }
  render() {
    return (
      <div>
        <Card title="基础按钮" className="card-wrapper">
          <Button type="primary">主按钮</Button>
          <Button>普通按钮</Button>
          <Button type="dashed">虚线</Button>
          <Button type="danger">错误</Button>
          <Button disabled>禁用</Button>
        </Card>
        <Card title="图标按钮" className="card-wrapper">
          <Button icon="plus">新建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button icon="search">搜索</Button>
          <Button icon="upload">上传</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="loading按钮" className="card-wrapper">
          <Button type="primary" loading={this.state.loading}>保存</Button>
          <Button loading={this.state.loading}>保存</Button>
          <Button type="primary" onClick={this.cancelLoading}>{ this.state.loading ? '关闭' : '打开' }</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left">前进</Button>
            <Button type="primary" icon="right">后退</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrapper">
         <Radio.Group value={this.state.size} onChange={(e) => this.setState({size: e.target.value})}>
           <Radio value="small">小</Radio>
           <Radio value="default">中</Radio>
           <Radio value="large">大</Radio>
         </Radio.Group>
         <Button type="primary" size={this.state.size}>按钮</Button>
         <Button type="dashed" size={this.state.size}>按钮</Button>
         <Button type="danger" size={this.state.size}>按钮</Button>
         <Button disabled size={this.state.size}>按钮</Button>
        </Card>
      </div>
    )
  }
}