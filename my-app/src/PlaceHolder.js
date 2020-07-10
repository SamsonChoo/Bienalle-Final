import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThinHeader from './svg/ThinHeader';
import Container from 'react-bootstrap/Container';
import Dots from './svg/Dots';
import './index.css';

export default class PlaceHolder extends React.Component {
  render() {
    return (
      <div className='overall'>
        <Container fluid>
          <Row>
            <Col xs={2}>
              <div className='header'>
                <div className='headersvg'>
                  <ThinHeader></ThinHeader>
                </div>
                <div className='dots2'>
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
