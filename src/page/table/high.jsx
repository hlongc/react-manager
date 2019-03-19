import React from 'react';
import { Card, Table, message, Badge } from 'antd';
import axios from './../../http';
export default class HighTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      tableLoading: true,
      sortOrder: false
    }
  }
  componentDidMount() {
    this.getTableData()
  }
  handleChange = (pagination, filters, sorter) => {
    console.log(this)
    this.setState({
      sortOrder: sorter.order
    })
  }
  handleDelete = (item) => {
    message.error(`删除了: ${item.username}`)
  }
  getTableData() {
    axios.get('/table/high')
      .then((res) => {
        this.setState({
          dataSource: res,
          tableLoading: false
        })
      })
  }
  render() {
    const columns = [
      { title: '姓名', dataIndex: 'username' },
      { title: '性别', dataIndex: 'gender' },
      { title: '年龄', dataIndex: 'age' },
      { title: '爱好', dataIndex: 'hobby' },
      { title: '工作', dataIndex: 'job' },
      { title: '出生日期', dataIndex: 'birthday' }
    ]
    const columns2 = [
      { title: '姓名', dataIndex: 'username', width: 100, fixed: 'left' },
      { title: '性别', dataIndex: 'gender', width: 100 },
      { title: '年龄', dataIndex: 'age', width: 100 },
      { title: '爱好', dataIndex: 'hobby', width: 100 },
      { title: '工作', dataIndex: 'job', width: 100 },
      { title: '工作', dataIndex: 'job', width: 100 },
      { title: '工作', dataIndex: 'job', width: 100 },
      { title: '工作', dataIndex: 'job', width: 100 },
      { title: '工作', dataIndex: 'job', width: 100 },
      { title: '工作', dataIndex: 'job', width: 100 },
      { title: '工作', dataIndex: 'job', width: 100 },
      { title: '工作', dataIndex: 'job', width: 100 },
      { title: '出生日期', dataIndex: 'birthday', width: 100, fixed: 'right' }
    ]
    const statusObj = {
      success: '成功',
      warning: '警告',
      processing: '进行中',
      error: '错误'
    }
    const columns3 = [
      { title: '姓名', dataIndex: 'username' },
      { title: '性别', dataIndex: 'gender' },
      { title: '年龄', dataIndex: 'age', sorter:(a, b) => a.age - b.age, sortOrder: this.state.sortOrder },
      { title: '状态', dataIndex: 'status', render: cur => <Badge status={cur} text={statusObj[cur]} /> },
      { title: '爱好', dataIndex: 'hobby' },
      { title: '工作', dataIndex: 'job' },
      { title: '出生日期', dataIndex: 'birthday' },
      { title: '操作', render: (text, item) => <a href="javascript:void();" onClick={() => this.handleDelete(item)}>删除</a> }
    ]
    return (
      <div>
        <Card title="表头固定">
          <Table 
            loading={this.state.tableLoading}
            pagination={false}
            columns={columns} 
            scroll={{y:300}}
            dataSource={this.state.dataSource} />
        </Card>
        <Card title="左右侧固定">
          <Table 
            loading={this.state.tableLoading}
            pagination={false}
            columns={columns2}
            scroll={{x:1313}}
            dataSource={this.state.dataSource} />
        </Card>
        <Card title="表格排序">
          <Table 
            loading={this.state.tableLoading}
            pagination={false}
            columns={columns3}
            onChange={this.handleChange}
            dataSource={this.state.dataSource} />
        </Card>
      </div>
    )
  }
}