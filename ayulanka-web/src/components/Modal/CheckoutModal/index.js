import React from 'react';
import { Modal, Button, ListGroup, Form, Row, Col ,Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faCreditCard, faCalendar, faLock } from '@fortawesome/free-solid-svg-icons';
import './CheckoutDetails.css';

function CheckoutModal({ show, onHide, product }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row>
          <Col md={6}>
            <Image src={product.imageUrl} alt={product.name} fluid rounded />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush" className="mb-4">
              <ListGroup.Item><strong>Name:</strong> {product.name}</ListGroup.Item>
              <ListGroup.Item><strong>Price:</strong> {product.price}</ListGroup.Item>
              <ListGroup.Item><strong>Description:</strong> {product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <hr></hr>
        <Form>
          <Row>
            <Col md={12}>
              <h5>Billing Information</h5>
             
            </Col>
            <Form.Group as={Col} md={6} controlId="formGroupName" className='mt-3'>
              <Form.Label><FontAwesomeIcon icon={faUser} /> Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="formGroupEmail" className='mt-3'>
              <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="formGroupAddress" className='mt-3'>
              <Form.Label><FontAwesomeIcon icon={faHome} /> Address</Form.Label>
              <Form.Control type="text" placeholder="1234 Main St" />
            </Form.Group>
            <Form.Group as={Col} md={3} controlId="formGroupCity" className='mt-3'> 
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Form.Group as={Col} md={3} controlId="formGroupZip" className='mt-3'>
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Postal Code" />
            </Form.Group>
          </Row>
          <hr></hr>
          <Row className="mt-3">
            <Col md={12}>
              <h5>Payment Details</h5>
            </Col>
            <Form.Group as={Col} md={6} controlId="formGroupCardName" className='mt-3'>
              <Form.Label><FontAwesomeIcon icon={faUser} /> Cardholder Name</Form.Label>
              <Form.Control type="text" placeholder="Name on card" />
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="formGroupCardNumber" className='mt-3'>
              <Form.Label><FontAwesomeIcon icon={faCreditCard} /> Card Number</Form.Label>
              <Form.Control type="text" placeholder="Card number" />
            </Form.Group>
            <Form.Group as={Col} md={3} controlId="formGroupExpDate" className='mt-3'>
              <Form.Label><FontAwesomeIcon icon={faCalendar} /> Expiration Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>
            <Form.Group as={Col} md={3} controlId="formGroupCVV" className='mt-3'>
              <Form.Label><FontAwesomeIcon icon={faLock} /> CVV</Form.Label>
              <Form.Control type="text" placeholder="CVV" />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={onHide}>Confirm Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CheckoutModal;
