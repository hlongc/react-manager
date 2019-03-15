import React from 'react';
import { Form, Card, Button, Input, Checkbox, message, Icon } from 'antd';
const FormItem = Form.Item;
class Forms extends React.Component {
  validate = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${values.username} 你的密码是：${values.userpwd}`)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card title="行内表单" style={{marginBottom:10}}>
          <Form layout="inline">
            <FormItem>
              <Input type="text" placeholder="username" />
            </FormItem>
            <FormItem>
              <Input type="password" placeholder="password" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="表单验证">
          <Form style={{width:300}}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue: 'hlongc',
                  rules: [
                    { required: true, message: '姓名必填!' },
                    { min: 6, max: 14, message: '长度为6-14位!' }
                  ]
                })(
                  <Input prefix={<Icon type="user" />} type="text" placeholder="username" />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('userpwd', {
                  initialValue: '123456',
                  rules: [
                    { required: true, message: '密码必须填写!' },
                    { min: 6, max: 14, message: '长度为6-14位!' },
                    { pattern: /^\w+$/g, message: '密码只能由数字和字母组成!' }
                  ]
                })(
                  <Input prefix={<Icon type="lock" />} type="password" placeholder="password" />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="#" style={{float:'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" style={{float: 'right',width:'100%'}} onClick={this.validate}>登录</Button>
              or <a href="#">registe now!</a>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({})(Forms)