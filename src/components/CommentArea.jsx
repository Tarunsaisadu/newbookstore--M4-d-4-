import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";

export default class CommentArea extends Component {
  state = {
    comments: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

   handleInput = (e, propertyName) => {
    
   this.setState({
         comments: {
             ...this.state.comments,
            
        
        }
     })
}





  handleSubmit = async (e) => {
    // with async/await
    e.preventDefault();
    console.log(this.state.comments);
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comments),
          headers: {
            "Content-type": "application/json",
            " Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1NjJkNTI2MjAwMTViNmRjOWMiLCJpYXQiOjE2Mjk5ODUxMTEsImV4cCI6MTYzMTE5NDcxMX0.gcvzPhg7snX6A6vame2BjvWMtyWds1VAsjqinc44fAc",
          },
        }
      );

      if (response.ok) {
        alert("your comment was added!");
      } else {
        alert("your comment was not added!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h2 className="mt-0">Comments</h2>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control 
                  type="text"
                placeholder="add comment"
                value={this.state.comments.comment}
                onChange={(e) => this.handleInput(e, 'rate')}/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>add rating</Form.Label>
                  <Form.Control 
                  as="select"
                  value={this.state.comments.rate}
                onChange={(e) => this.handleInput(e, 'rate')}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  give an id
                  <Form.Control 
                  type="number" 
                  label="give an id"
                  value={this.state.comments.elementId}
                onChange={(e) => this.handleInput(e, 'elementId')} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit review
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
