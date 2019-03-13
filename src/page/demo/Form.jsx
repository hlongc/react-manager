import React from 'react';
import { Form, Input, Select } from 'antd';
const Option = Select.Option

export default class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '这是input输入框',
      textareaVal: '这是textarea输入框',
      optionVal: '科比',
      checkVal: true
    }
  }

  handle = (e) => {
    var target = e.target
    var name = target.name
    var value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  submitForm = (e) => {
    console.log(this.state)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitForm}>
          <Input type="text" name="inputVal" value={this.state.inputVal} onChange={this.handle}/>
          <textarea name="textareaVal" style={{resize:'none'}} cols="30" rows="10" value={this.state.textareaVal} onChange={this.handle}></textarea>
          <label htmlFor="checkbox">
            <Input 
              id="checkbox" 
              type="checkbox" 
              name="checkVal" 
              checked={this.state.checkVal}
              onChange={this.handle}/>
          </label>
          <Select name="optionVal" value={this.state.optionVal} onChange={this.handle}>
            <Option value="科比">科比</Option>
            <Option value="伦纳德">伦纳德</Option>
            <Option value="詹姆斯">詹姆斯</Option>
            <Option value="杜兰特">杜兰特</Option>
          </Select>
          <Input type="submit" value="提交"/>
        </Form>
      </div>
    )
  }
}