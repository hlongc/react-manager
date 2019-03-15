import React from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less'
export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false
    }
  }
  handleClick = (type) => {
    this.setState({ [type]: true })
  }
  handleConfirm = (type) => {
    Modal[type]({
      title: `${type}弹窗`,
      content: 'r u ok',
      onCancel() {
        console.log('cancel')
      },
      onOk() {
        console.log('ok')
      }
    })
  }
  render() {
    return (
      <div>
        <Card title="普通模态框" className="card-wrapper">
          <Button type="primary" onClick={() => this.handleClick('modal1')}>普通模态框</Button>
          <Button type="primary" onClick={() => this.handleClick('modal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleClick('modal3')}>top20px</Button>
          <Button type="primary" onClick={() => this.handleClick('modal4')}>水平垂直居中</Button>
        </Card>
        <Card title="普通模态框" className="card-wrapper">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('error')}>error</Button>
        </Card>
        <Modal 
          title="我是title" 
          visible={this.state.modal1} 
          onOk={() => this.setState({ modal1: false })}
          onCancel={() => this.setState({ modal1: false })}>
          <p>一起学习React全家桶</p>
        </Modal>
        <Modal 
          title="自定义页脚" 
          okText="好的"
          cancelText="算了"
          visible={this.state.modal2} 
          onOk={() => this.setState({ modal2: false })}
          onCancel={() => this.setState({ modal2: false })}>
          <p>一起学习React全家桶</p>
        </Modal>
        <Modal 
          title="top20px"
          style={{top: 20}}
          visible={this.state.modal3} 
          onOk={() => this.setState({ modal3: false })}
          onCancel={() => this.setState({ modal3: false })}>
          <p>一起学习React全家桶</p>
        </Modal>
        <Modal 
          title="水平垂直居中" 
          wrapClassName="vertical-center-modal"
          visible={this.state.modal4} 
          onOk={() => this.setState({ modal4: false })}
          onCancel={() => this.setState({ modal4: false })}>
          <p>一起学习React全家桶</p>
        </Modal>
      </div>
    )
  }
}