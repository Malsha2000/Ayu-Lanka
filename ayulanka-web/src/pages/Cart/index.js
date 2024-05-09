import React, { useState } from 'react';
import { Container, Table, Button, Alert, Image,Form } from 'react-bootstrap';
import './Cart.css';

function CartPage() {
    // Example initial cart data with images
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Herbal Tea', price: 10.99, quantity: 2, image: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
        { id: 2, name: 'Essential Oils', price: 15.50, quantity: 1, image: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
        { id: 3, name: 'Herbal Cream', price: 8.75, quantity: 1, image: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
    ]);

    const handleRemove = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        setCartItems(cartItems.map(item => 
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        ));
    };

    const handleCheckout = () => {
        alert('Proceed to Checkout');
    };

    return (
        <Container className="mt-5">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td><Image src={item.image} thumbnail style={{ width: "100px" }}/></td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>
                                    <Form.Control 
                                        type="number" 
                                        value={item.quantity} 
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        min="1"
                                        style={{ width: '80px', marginRight: '10px', display: 'inline-block' }}
                                    />
                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <Alert variant="info">Your cart is empty.</Alert>
            )}
            <Button variant="primary" onClick={handleCheckout} disabled={cartItems.length === 0}>Checkout</Button>
        </Container>
    );
}

export default CartPage;