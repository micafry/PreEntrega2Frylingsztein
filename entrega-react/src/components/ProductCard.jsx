import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';

const ProductCard = ({productData}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={productData.images[0]} />
    <Card.Body>
      <Card.Title>{productData.title}</Card.Title>
      <Card.Text>
        {productData.description}
      </Card.Text>
      <CartButtons />
      <Link to={`/item/${productData.id}`}>Detalles</Link>
     
    </Card.Body>
  </Card>
  )
}

export default ProductCard
