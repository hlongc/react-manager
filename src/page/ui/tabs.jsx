import React from 'react';
import { Card, Tabs, message, Icon } from 'antd';
import './ui.less'

const TabPane = Tabs.TabPane
export default class Tab extends React.Component {
  handleChange = (key) => {
    message.info(`你选择了: ${key}`)
  }
  render() {
    return (
      <div>
        <Card title="普通Tabs" className="card-wrapper">
          <Tabs defaultActiveKey="1" onChange={this.handleChange}>
            <TabPane tab="tab1" key="1">这是新增tab</TabPane>
            <TabPane tab="tab2" key="2" disabled>这是编辑tab</TabPane>
            <TabPane tab="tab3" key="3">这是删除tab</TabPane>
          </Tabs>
        </Card>
        <Card title="带图标的Tabs" className="card-wrapper">
          <Tabs defaultActiveKey="1" onChange={this.handleChange}>
            <TabPane tab={<span><Icon type="plus"/>新增</span>} key="1">这是新增tab</TabPane>
            <TabPane tab={<span><Icon type="edit"/>编辑</span>} key="2">这是编辑tab</TabPane>
            <TabPane tab={<span><Icon type="delete"/>删除</span>} key="3">这是删除tab</TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}