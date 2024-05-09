import React  from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './ProductList.css';

function ProductList({ products, title }) {
    const navigate = useNavigate();
  
    const goToProductDetails = (productId) => {
      navigate(`/product/${productId}`); // Navigate to the product details page
    };
  
    return (
      <Container className='mt-5 mb-5'>
        <h2 className='mb-5'>{title}</h2>
        <Row>
          {products.map((product, idx) => (
            <Col key={idx} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary" onClick={() => goToProductDetails(product.id)}>View Product</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default ProductList;