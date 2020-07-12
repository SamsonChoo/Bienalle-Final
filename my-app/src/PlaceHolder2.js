import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThinHeader from './svg/ThinHeader';
import Container from 'react-bootstrap/Container';
import Dots from './svg/Dots';
import Image from './svg/Image 2.png';
import './index.css';

export default class PlaceHolder2 extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = this.props.color;
  }

  render() {
    return (
      <div class='overall'>
        <Container fluid>
          <Row>
            <Col xs={1}>
              <div class='header2'>
                <div class='headersvg'>
                  <ThinHeader></ThinHeader>
                </div>
                <div class='dots2'>
                  <Dots></Dots>
                </div>
              </div>
            </Col>
            <Col>
              <div class='title'>{this.props.title}</div>
              <div class='subtitle'>{this.props.subtitle}</div>
              <img src={Image} class='test'></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
