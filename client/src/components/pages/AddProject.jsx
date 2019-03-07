import React, { Component } from "react";
import api from "../../api";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          name: "",
          projectlink: "",
          githublink: "",
          description: "",
          projectimage: "",
          technologyUsed: "",
          message: `Your project '${this.state.name}' has been created`
        });
        // Redirect the user the "/projects"
        this.props.history.push("/projects");
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
      <div className="container Login AddProject">
        <h2>Add Projects</h2>
        <br />
        <form>
          Upload a project image*{" "}
          <input type="file" onChange={e => this.handleFileChange(e)} />
          <br />
          <br />
          Your Project Name* <br />
          <input
            placeholder="Enter your project name"
            className="text-center"
            type="text"
            size="35"
            value={this.state.name}
            onChange={e => {
              this.handleInputChange("name", e);
            }}
          />{" "}
          <br />
          <br />
          Brief Description* <br />
          <input
            value={this.state.description}
            placeholder="maximum 20 characters"
            size="35"
            className="text-center"
            maxlength="20"
            cols="30"
            rows="10"
            onChange={e => {
              this.handleInputChange("description", e);
            }}
          />{" "}
          <br />
          <br />
          Technology Used* <br />
          <input
            placeholder="e.g react, vue, graphql, sql"
            size="35"
            className="text-center"
            type="text"
            value={this.state.technologyused}
            onChange={e => {
              this.handleInputChange("technologyused", e);
            }}
          />{" "}
          <br />
          <br />
          Demo Link* <br />
          <input
            placeholder="Enter a demo link"
            size="35"
            className="text-center"
            type="text"
            value={this.state.projectlink}
            onChange={e => {
              this.handleInputChange("projectlink", e);
            }}
          />{" "}
          <br />
          <br />
          Github Link* <br />
          <input
            placeholder="Enter a link to your project"
            size="35"
            className="text-center"
            type="text"
            value={this.state.githublink}
            onChange={e => {
              this.handleInputChange("githublink", e);
            }}
          />{" "}
          <br />
          <br />
          <h6>
            <i>Fields marked* are required</i>{" "}
          </h6>
          <br />
          <button onClick={e => this.handleClick(e)}>Add Project</button>
        </form>
        {this.state.message && <div className="info">{this.state.message}</div>}
      </div>
    );
  }
}
export default AddProject;
