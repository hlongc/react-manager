import React from 'react';
import { Card, Row, Col, Modal } from 'antd';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: '',
      modalVisible: false
    }
  }
  handleClick = (img) => {
    this.setState({
      imgSrc: '/gallery/' + img,
      modalVisible: true
    })
  }
  render() {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
      ['7.png', '8.png', '9.png', '10.png', '11.png', '12png'],
      ['13.png', '14.png', '15.png', '16.png', '17.png', '18.png'],
      ['19.png', '20.png', '21.png', '22.png', '23.png', '24.png']
    ]
    const imgList = imgs.map(list => <Col md={6}>{ list.map((img, index) => 
      <Card
       cover={<img src={`/gallery/${img}`} style={{cursor:'pointer'}} onClick={() => this.handleClick(img)} alt='' />}
      >
        <Card.Meta title={`demo${index}`} description="do u like ?"></Card.Meta>
      </Card> 
    ) }</Col>)
    return (
      <div>
        <Row gutter={16}>
          { imgList }
        </Row>
        <Modal
          title="美图"
          visible={this.state.modalVisible}
          onCancel={() => this.setState({ modalVisible: false })}
          footer={null}
          style={{top:20}}
          width={300}
          height={400}
        >
          <img src={this.state.imgSrc} style={{width:'100%'}} alt='' />
        </Modal>
      </div>
    )
  }
}