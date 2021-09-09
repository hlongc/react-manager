import React from 'react';
import { Form, Select, Button, Input } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends React.Component{
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem label="城市">
          {
            getFieldDecorator('city_id')(
              <Select style={{width:100}} placeholder="全部" >
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
                <Option value="3">深圳市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式">
          {
            getFieldDecorator('mode')(
              <Select style={{ width: 120 }} placeholder="全部" >
                <Option value="">全部</Option>
                <Option value="1">指定停车点</Option>
                <Option value="2">禁停区</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式">
          {
            getFieldDecorator('op_mode')(
              <Select style={{ width: 80 }} placeholder="全部" >
                <Option value="">全部</Option>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="加盟商授权状态">
          {
            getFieldDecorator('auth_status')(
              <Select style={{ width: 100 }} placeholder="全部" >
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    );
  }
}

FilterForm = Form.create({})(FilterForm);
export default class City extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }
  see = () => {
    console.log(this.refs.textarea.textAreaRef.value)
    console.log(this.input.current.input.value)
  }
  render() {
    return(
      <div>
        <FilterForm />
        <Input.TextArea defaultValue="默认值" ref="textarea" />
        <Input defaultValue="我是input" ref={this.input} />
        <Button onClick={this.see}>查看非受控组件的值</Button>
      </div>
    )
  }
}