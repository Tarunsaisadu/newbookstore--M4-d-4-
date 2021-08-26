import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data/fantasy.json";

export default class BookList extends Component {
  render() {
    return (
      <Container>
           <h2>Fantasy</h2>
        <Row className="row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
       
          {books.map((book) => (
            <Col>
              <Card >
                <Card.Img variant="top" src= {book.img}/>
                <Card.Body key={book.asin}>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                   {book.category}
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
