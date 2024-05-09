import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

function CheckoutModal({ show, onHide, product }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Product Details</h5>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Name:</strong> {product.name}</ListGroup.Item>
          <ListGroup.Item><strong>Price:</strong> {product.price}</ListGroup.Item>
          <ListGroup.Item><strong>Description:</strong> {product.description}</ListGroup.Item>
        </ListGroup>
        <h5>Billing Information</h5>
        {/* Billing form or component goes here */}
        <h5>Payment Details</h5>
        {/* Payment form or integration goes here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={onHide}>Confirm Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CheckoutModal;
