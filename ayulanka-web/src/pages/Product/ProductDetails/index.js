import { useState } from 'react'; 
import {useParams } from 'react-router-dom';
import { Card, Container, Button, Row, Col, ListGroup, Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCreditCard, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import CheckoutModal from '../../../components/Modal/CheckoutModal';
import './ProductDetails.css';

function ProductDetails() {
  const { productId } = useParams(); // Get the product ID from the URL
  const [modalShow, setModalShow] = useState(false);

  // Dummy data - ideally, you'd fetch this data from a server or API
  const product = {
    id: productId,
    name: 'Herbal Tea',
    description: 'A soothing, calming blend perfect for relaxing afternoons.',
    imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg',
    price: '$15.99',
    details: ['100g package', 'Caffeine Free', 'Organic'],
    inStock: true,
    longDescription: 'This herbal tea is composed of a carefully selected blend of herbs known for their calming and relaxing properties. Enjoy a cup of this tea and let the stresses of the day melt away.',
    specifications: {
      'Weight': '100g',
      'Ingredients': 'Chamomile, Lavender, Peppermint',
      'Origin': 'USA'
    },
    reviews: [
      { author: 'Jane Doe', rating: 5, text: 'Love this tea! It really helps me relax.' },
      { author: 'John Smith', rating: 4, text: 'Very soothing, but I wish it came in larger packages.' }
    ]
  };

  return (
    <Container className="product-details-container">
      <Card className="product-card">
        <Row noGutters>
          <Col md={6}>
            <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <strong>Price: {product.price}</strong>
              </Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="success" className="btn-block mb-2">
                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
              </Button>
              <Button variant="warning" className="btn-block mb-2" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faCreditCard} /> Buy Now
              </Button>
              <Button variant="info" className="btn-block mb-2">
                <FontAwesomeIcon icon={faHeart} /> Save for Later
              </Button>
              <Button variant="secondary" className="btn-block">
                <FontAwesomeIcon icon={faShareAlt} /> Share
              </Button>
            </Card.Body>
          </Col>
        </Row>
        <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="description" title="Description">
            <Card.Body>
              {product.longDescription}
            </Card.Body>
          </Tab>
          <Tab eventKey="specifications" title="Specifications" className="specifications-tab">
    <ListGroup variant="flush" className="specifications-list">
        {Object.entries(product.specifications).map(([key, value]) => (
            <ListGroup.Item key={key} className="specifications-item">
                <span className="specification-key">{key}:</span>
                <span className="specification-value">{value}</span>
            </ListGroup.Item>
        ))}
    </ListGroup>
</Tab>

          <Tab eventKey="reviews" title="Reviews">
            {product.reviews.map((review, index) => (
              <Card key={index} className="mb-2">
                <Card.Body>
                  <Card.Title>{review.author}</Card.Title>
                  <Card.Text>{review.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Tab>
        </Tabs>
      </Card>
      <CheckoutModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
      />
    </Container>
  );
}

export default ProductDetails;
