import React from 'react';
import { Card, Carousel } from 'antd';

export default class Carousels extends React.Component {
  render() {
    return (
      <div>
        <Card title="文字轮播" className="card-wrapper">
          <Carousel autoplay={true} effect="scrollx">
            <div><h1>React</h1></div>
            <div><h1>Angular</h1></div>
            <div><h1>Vue</h1></div>
            <div><h1>JQuery</h1></div>
          </Carousel>
        </Card>
        <Card title="图片轮播" className="carousel-wrapper">
          <Carousel autoplay={true} effect="scrollx">
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel-img/carousel-2.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel-img/carousel-3.jpg" alt=""/>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}