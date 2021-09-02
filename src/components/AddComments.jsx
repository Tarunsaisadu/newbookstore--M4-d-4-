import { Component } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

class AddComments extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  shouldAddComments = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",

        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1NjJkNTI2MjAwMTViNmRjOWMiLCJpYXQiOjE2MzAzMzE4OTcsImV4cCI6MTYzMTU0MTQ5N30.g_hsR-rICzdwt3EK3v_6AeEc3hz7XX5yrlleZm8VndQ",
          },
        }
      );
      if (response.ok) {
        alert("comment added");
      } else {
        alert("failed to add comment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Form inline onSubmit={this.shouldAddComments}>
              <Form.Label
                className="my-1 mr-2"
                htmlFor="inlineFormCustomSelectPref"
              >
                Add your comment here
              </Form.Label>
              <Form.Label htmlFor="inlineFormInputName2" srOnly></Form.Label>
              <Form.Control
                className="mb-2 mr-sm-2"
                id="inlineFormInputName2"
                type="text"
                placeholder="comment"
                value={this.state.comment.comment}
                onChange={(e) =>
                  this.setState({
                    comment: {
                      ...this.state.comment,
                      comment: e.target.value,
                    },
                  })
                }
              />
              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.comment.rate}
                  onChange={(e) =>
                    this.setState({
                      comment: {
                        ...this.state.comment,
                        rate: e.target.value,
                      },
                    })
                  }
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Button
                  type="submit"
                  className="my-1 px-10"
                  style={{ display: "inline" }}
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddComments;
