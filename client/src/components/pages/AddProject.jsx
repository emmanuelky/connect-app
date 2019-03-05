import React, { Component } from "react";
import api from "../../api";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      projectlink: "",
      githublink: "",
      description: "",
      technologyused: "",
      projectimage: null,
      message: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleInputChange(stateFieldName, event) {
    let newState = {};
    newState[stateFieldName] = event.target.value;

    this.setState(newState);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.name, this.state.description);

    let formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("name", this.state.name);
    formData.append("projectlink", this.state.projectlink);
    formData.append("githublink", this.state.githublink);
    formData.append("description", this.state.description);
    formData.append("technologyused", this.state.technologyused);
    formData.append("projectimage", this.state.projectimage);
    api
      .addProjects(formData)
      .then(result => {
        console.log("SUCCESS!", result);
        this.setState({
          username: "",
          name: "",
          projectlink: "",
          githublink: "",
          description: "",
          projectimage: "",
          technologyUsed: "",
          message: `Your project '${this.state.name}' has been created`
        });
        setTimeout(() => {
          this.setState({
            message: null
          });
        }, 2000);
      })
      .catch(err => this.setState({ message: err.toString() }));
  }

  handleFileChange(e) {
    console.log("E", e.target.files[0]);
    this.setState({
      projectimage: e.target.files[0]
    });
  }

  render() {
    return (
      <div className="AddProject">
        <h2>Add Projects</h2>
        <form>
          Project Image:{" "}
          <input type="file" onChange={e => this.handleFileChange(e)} />
          <br />
          Username:{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={e => {
              this.handleInputChange("username", e);
            }}
          />{" "}
          <br />
          Project Name:{" "}
          <input
            type="text"
            value={this.state.name}
            onChange={e => {
              this.handleInputChange("name", e);
            }}
          />{" "}
          <br />
          Description:{" "}
          <textarea
            value={this.state.description}
            cols="30"
            rows="10"
            onChange={e => {
              this.handleInputChange("description", e);
            }}
          />{" "}
          <br />
          Technology Used:{" "}
          <input
            type="text"
            value={this.state.technologyused}
            onChange={e => {
              this.handleInputChange("technologyused", e);
            }}
          />{" "}
          <br />
          Demo Link:{" "}
          <input
            type="text"
            value={this.state.projectlink}
            onChange={e => {
              this.handleInputChange("projectlink", e);
            }}
          />{" "}
          <br />
          Github Link:{" "}
          <input
            type="text"
            value={this.state.githublink}
            onChange={e => {
              this.handleInputChange("githublink", e);
            }}
          />{" "}
          <br />
          <button onClick={e => this.handleClick(e)}>Add Project</button>
        </form>
        {this.state.message && <div className="info">{this.state.message}</div>}
      </div>
    );
  }
}
export default AddProject;
