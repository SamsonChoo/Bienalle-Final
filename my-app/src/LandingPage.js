import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LandingHeader from './svg/LandingHeader';
import Container from 'react-bootstrap/Container';
import Dots from './svg/Dots';
import './index.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className='overall'>
        <Container fluid>
          <Row>
            <Col xs={2}>
              <div className='header'>
                <div className='headersvg'>
                  <LandingHeader onClick={this.props.onClick}></LandingHeader>
                </div>
                <div className='float-right dots'>
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
