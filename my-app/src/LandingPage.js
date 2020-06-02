import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LandingHeader from './svg/LandingHeader';
import Container from 'react-bootstrap/Container';
import Dots from './svg/Dots';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div class='overall' onClick={this.props.onClick}>
        <Container fluid>
          <Row>
            <Col xs={2}>
              <div class='header'>
                <LandingHeader></LandingHeader>
                <div class='float-right dots'>
                  <Dots></Dots>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
