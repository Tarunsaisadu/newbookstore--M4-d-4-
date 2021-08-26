import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import books from "../data/fantasy.json";

export default class SingleBook extends Component {
  state = {
    comments: {},
  };
  giveComments = (e) => {
    console.log(e);
    this.setState({
      comments: {},
    });
  };

  componentDidMount = async () => {
    console.log("I'm componentDidMount");

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1NjJkNTI2MjAwMTViNmRjOWMiLCJpYXQiOjE2Mjk5ODUxMTEsImV4cCI6MTYzMTE5NDcxMX0.gcvzPhg7snX6A6vame2BjvWMtyWds1VAsjqinc44fAc"
          }
        } 
      );
      console.log(response);
      if (response.ok) {
        let showdata = await response.json();
        console.log(showdata);
      } else {
        console.log("something went wrong with the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container className="justify-content-center">
        <Row className="row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={books[0].img}
                onClick={this.giveComments}
              />
              <h2>{books[0].category}</h2>
            </Card>
          </Col>
        </Row>
        
        {/* <ListGroup>
       
            <ListGroup.Item key={comments._id}>
              {comments.comment}
            </ListGroup.Item>
          
        </ListGroup> */}
      </Container>
    );
  }
}
