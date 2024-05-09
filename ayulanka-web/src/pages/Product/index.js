import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductList from '../../components/ProductList';
import './product.css';

// Data for products and carousel images
const allProducts = [
  { name: 'Herbal Tea', description: 'Calming tea blend', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg', price: 9.99  },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' , price: 19.99 },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' , price: 7.99 },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' , price: 6.99 },
];

const carouselImages = [
  { src: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg', alt: 'Slide 1', caption: 'Discover Our Best Sellers' },
  { src: 'https://image.shutterstock.com/image-photo/new-tea-collection-260nw-1146290894.jpg', alt: 'Slide 2', caption: 'New Arrivals' },
  { src: 'https://image.shutterstock.com/image-photo/seasonal-tea-special-260nw-1146290894.jpg', alt: 'Slide 3', caption: 'Seasonal Specials' },
];

function Products() {
  return (
    <div className="product-page-container">
      <Carousel interval={3000} keyboard={true} pauseOnHover={true}>
        {carouselImages.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={img.src}
              alt={img.alt}
            />
            <Carousel.Caption>
              <h3>{img.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <ProductList products={allProducts} title="All Products" />
    </div>
  );
}

export default Products;
