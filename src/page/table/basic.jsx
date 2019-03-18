import React from 'react';
import { Card, Table, Spin, message } from 'antd';
import axios from 'axios';
export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource : [
        { username: 'hlongc', gender: '男', age: 24, hobby: '台球', job: 'web前端', birthday: '1995-10-21', key: 0 },
        { username: 'hlongc', gender: '男', age: 24, hobby: '台球', job: 'web前端', birthday: '1995-10-21', key: 1 },
        { username: 'hlongc', gender: '男', age: 24, hobby: '台球', job: 'web前端', birthday: '1995-10-21', key: 2 },
        { username: 'hlongc', gender: '男', age: 24, hobby: '台球', job: 'web前端', birthday: '1995-10-21', key: 3 }
      ],
      dataSource2: [],
      tableLoading: true,
      selectedRowKeys: [],
      selectRow: null
    }
  }
  componentDidMount() {
    this.getTableData()
  }
  getTableData() {
    axios.get('/table/high')
      .then((res) => {
        this.setState({
          dataSource2: res,
          tableLoading: false
        })
      })
  }
  rowClick = (record, index) => {
    message.destroy()
    message.info(record.username)
    this.setState({
      selectedRowKeys: [index],
      selectRow: record
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
    return (
      <div>
        <Card title="基础表格">
          <Table 
            pagination={false}
            columns={columns} 
            dataSource={this.state.dataSource} />
        </Card>
        <Card title="动态获取数据">
          <Table 
            loading={this.state.tableLoading}
            pagination={false}
            columns={columns} 
            dataSource={this.state.dataSource2} />
        </Card>
        <Card title="单选">
          <Table 
            pagination={false}
            rowSelection = {{ type: 'radio', selectedRowKeys: this.state.selectedRowKeys }}
            onRow={(record, index) => {return {
              onClick: () => this.rowClick(record, index)
            }}}
            columns={columns} 
            dataSource={this.state.dataSource} />
        </Card>
      </div>
    )
  }
}