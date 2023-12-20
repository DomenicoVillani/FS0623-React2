import React from "react";
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap"


function SingleBook(props) {
    const {book} = props
    return (
        <Col key={book.asin} sm={12} md={4} lg={3}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Costo: {book.price}$</Card.Text>
                <Card.Text>Categoria: {book.category}</Card.Text>
            </Card.Body>
        </Col>
    )
}
export default SingleBook