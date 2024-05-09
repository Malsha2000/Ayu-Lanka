import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './ProductList.css';

function ProductList({ products, title }) {
  const navigate = useNavigate();

  const goToProductDetails = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product details page
  };

  return (
    <Container className='mt-5 mb-5'>
      <h2 className='mb-5 text-center'>{title}</h2>
      <Row className="g-4">
        {products.map((product, idx) => (
          <Col key={idx} sm={12} md={6} lg={4} xl={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.imageUrl} className="card-image-top"/>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <hr />
                <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                <Card.Text className="mb-2 text-muted">Price: ${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => goToProductDetails(product.id)}>
                  View Product <FontAwesomeIcon icon={faEye} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
