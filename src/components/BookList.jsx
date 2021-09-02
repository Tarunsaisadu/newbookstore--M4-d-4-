import React from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Container, Row, Col, Form } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    searchQuery: "",
    slectedBook: null,
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              // <Col xs={3}>
              <SingleBook
                book={b}
                changeSelectedBook={(asin) =>
                  this.setState({ slectedBook: asin })
                }
              />
              // {/* </Col> */}
            ))}
          <Col>{/* <CommentArea asin={this.props.book.asin} /> */}</Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
