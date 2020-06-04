import React from 'react';
import './index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LandingHeader from './svg/LandingHeader';
import Dots from './svg/Dots';

export default class CYU extends React.Component {
  render() {
    return (
      <div className='overall'>
        <Container fluid>
          <Row>
            <Col xs={2}>
              <div className='header'>
                <LandingHeader onClick={this.props.onClick}></LandingHeader>
                <div className='float-right dots'>
                  <Dots></Dots>
                </div>
              </div>
            </Col>
            <Col xs={7}></Col>
            <Col xs={3}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
