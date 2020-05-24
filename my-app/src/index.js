import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';

class Header extends React.Component {
  render() {
    return <div className='MyHeader'>Future Hybrid Highrise Commune</div>;
  }
}
class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Header></Header>
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
