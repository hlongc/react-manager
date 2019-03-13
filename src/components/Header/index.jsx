import React from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';
import http from '../../http';
import './index.less'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'hlongc',
      date: '',
      weather: {}
    }
  }
  componentWillMount() {
    this.setInterval = setInterval(() => {
      this.setState({
        date: moment().format('YYYY-MM-DD HH:mm:ss')
      })
    }, 1000)
    this.getWeatherData()
  }
  componentDidMount() {
    this.setInterval = null
  }
  getWeatherData() {
    let city = '北京'
    http.JSONP({url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&  output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    }).then(res => {
      this.setState({
        weather: res.weather_data[0]
      })
    })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎 , {this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="header-bottom">
          <Col span={4} className="breadcrumb">首页</Col>
          <Col span={20} className="weather">
            <div className="weather-wrapper">
              <span className="date">{this.state.date}</span>
              <span className="weather-image">
                <img src={this.state.weather.dayPictureUrl} alt="天气图标"/>
              </span>
              <span className="weather-detail">{this.state.weather.weather}</span>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}