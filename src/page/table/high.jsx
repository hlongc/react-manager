import React from 'react';
import { Card, Table, Spin, message } from 'antd';
import axios from './../../http';
export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      tableLoading: true
    }
  }
  componentDidMount() {
    this.getTableData()
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
      </div>
    )
  }
}