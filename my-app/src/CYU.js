import React from 'react';
import './index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LandingHeader from './svg/LandingHeader';
import Dots from './svg/Dots';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// export default class CYU extends React.Component {
//   render() {
//     return (
//       <div className='overall'>
//         <Container fluid>
//           <Row>
//             <Col xs={2}>
//               <div className='header'>
//                 <LandingHeader onClick={this.props.onClick}></LandingHeader>
//                 <div className='float-right dots'>
//                   <Dots></Dots>
//                 </div>
//               </div>
//             </Col>
//             <Col xs={7}></Col>
//             <Col xs={3}></Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      dialogClassName='modal-90w'
    >
      <Modal.Body>
        <h4>Future Hybrid Highrise Commune</h4>
        <p>
          How will we live together? Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laborisLorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default function CYU() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
