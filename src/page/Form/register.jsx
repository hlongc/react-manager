import React from 'react';
import { 
  Form, 
  Card, 
  Button, 
  Input, 
  Checkbox, 
  message,
  Select, 
  Switch,
  DatePicker,
  Upload,
  Icon, 
  Radio } from 'antd';
const FormItem = Form.Item;
class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      imageUrl: null
    }
  }
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  submit = () => {
    const data = this.props.form.getFieldsValue()
    console.log(data)
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      }
    }
    const onlyRight = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12, offset: 4 },
      }
    }
    return (
      <div>
        <Card title="注册表单">
          <Form>
            <FormItem label="姓名" { ...formItemLayout }>
              {
                getFieldDecorator('userName', {
                  rules: [
                    { required: true, message: '用户名必须填写' }
                  ]
                })(
                  <Input placeholder="姓名" />
                )
              }
            </FormItem>
            <FormItem label="密码" { ...formItemLayout }>
              {
                getFieldDecorator('userPwd', {
                  rules: [
                    { required: true, message: '密码必须填写' }
                  ]
                })(
                  <Input type="password" placeholder="密码" />
                )
              }
            </FormItem>
            <FormItem label="性别" { ...formItemLayout }>
              {
                getFieldDecorator('gender', {
                  initialValue: '1'
                })(
                  <Radio.Group>
                    <Radio value="1">男</Radio>
                    <Radio value="0">女</Radio>
                  </Radio.Group>
                )
              }
            </FormItem>
            <FormItem label="婚姻状况" { ...formItemLayout }>
              {
                getFieldDecorator('marriage', {
                  initialValue: '1'
                })(
                  <Select>
                    <Select.Option value="1">孤狼</Select.Option>
                    <Select.Option value="2">渣男</Select.Option>
                    <Select.Option value="3">渣女</Select.Option>
                    <Select.Option value="4">已婚</Select.Option>
                    <Select.Option value="5">离异</Select.Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" { ...formItemLayout }>
              {
                getFieldDecorator('hobby', {
                  initialValue: ['1', '3']
                })(
                  <Select mode="multiple">
                    <Select.Option value="1">🎱台球</Select.Option>
                    <Select.Option value="2">🏀篮球</Select.Option>
                    <Select.Option value="3">🏸羽毛球</Select.Option>
                    <Select.Option value="4">🏊游泳</Select.Option>
                    <Select.Option value="5">⚽️足球</Select.Option>
                    <Select.Option value="6">🏃跑步</Select.Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否就业" { ...formItemLayout }>
              {
                getFieldDecorator('job', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch checkedChildren="是" unCheckedChildren="否" />
                )
              }
            </FormItem>
            <FormItem label="出生日期" { ...formItemLayout }>
              {
                getFieldDecorator('birthday')(
                  <DatePicker mode="date" showTime format="YYYY-MM-DD" />
                )
              }
            </FormItem>
            <FormItem label="起床时间" { ...formItemLayout }>
              {
                getFieldDecorator('leaveBed')(
                  <DatePicker mode="time" showTime format="hh:mm:ss" />
                )
              }
            </FormItem>
            <FormItem label="家庭地址" { ...formItemLayout }>
              {
                getFieldDecorator('address', {
                  initialValue: '四川省成都市春熙路'
                })(
                  <Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />
                )
              }
            </FormItem>
            <FormItem label="头像上传" { ...formItemLayout }>
              {
                getFieldDecorator('avatar')(
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                  >
                    {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" /> : <Icon type="plus"/>}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem { ...onlyRight }>
              {
                getFieldDecorator('agree')(
                  <Checkbox>我已阅读并且同意<a href="#">该协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem { ...onlyRight }>
              <Button type="primary" onClick={this.submit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({})(RegisterForm)