import React, { Component } from "react";
import api from "../../api";
import { Link } from "react-router-dom";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handleClick() {}

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.name
    });
  }

  getComment(_creator) {
    api.getComment(_creator).then(data => {
      this.setState({
        _creator: this.state._creator.filter(c => c._id !== _creator),
        message: data.message
      });
      // Remove the message after 3 seconds
      setTimeout(() => {
        this.setState({
          message: null
        });
      }, 3000);
    });
  }

  render() {
    return (
      <div>
        <h3>Comment</h3>
        <Link to={"/projectId/comments/"}>Comment</Link>{" "}
        {this.state.comment._project}
        {this.state.comment._creator}
      </div>
    );
  }
  componentDidMount() {
    api
      .getComment()
      .then(comments => {
        console.log(comments);
        this.setState({
          comments: comments
        });
      })
      .catch(err => console.log(err));
  }
}
