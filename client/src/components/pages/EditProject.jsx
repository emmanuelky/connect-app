import React, { Component } from "react";
import api from "../../api";

export default class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      projectlink: "",
      projectimage: "",
      description: "",
      technologyused: "",
      date: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(stateKey, event) {
    this.setState({
      [stateKey]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let {
      name,
      projectlink,
      projectimage,
      description,
      technologyused,
      date
    } = this.state;

    api
      .editProject(this.props.match.params.projectId, {
        name,
        projectlink,
        projectimage,
        description,
        technologyused,
        date
      })
      .then(data => {
        console.log("I could do it", data);
        this.setState({
          message: data.message
        });
        // Remove of the message after 3 seconds
        setTimeout(() => {
          this.setState({
            message: "Your project has been updated"
          });
        }, 2000);
      });
  }
  render() {
    return (
      <div className="container editProject Login">
        <h1>Edit Project</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          Project Name* <br />
          <input
            placeholder=""
            size="35"
            className="text-center"
            type="text"
            value={this.state.name}
            onChange={e => {
              this.handleInputChange("name", e);
            }}
          />{" "}
          <br />
          <br />
          Github Link* <br />
          <input
            placeholder="Enter a github link to your project"
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
          Brief Description* <br />
          <input
            placeholder="maximum 20 characters"
            size="35"
            className="text-center"
            type="text"
            value={this.state.description}
            onChange={e => {
              this.handleInputChange("description", e);
            }}
          />{" "}
          <br />
          <br />
          Technology Used* <br />
          <input
            placeholder="e.g react, vue, graphql"
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
          <h6>
            <i>Fields marked* are required</i>{" "}
          </h6>
          <br />
          <button>Edit Project</button>
        </form>
        {this.state.message && <div className="info">{this.state.message}</div>}
      </div>
    );
  }
  componentDidMount() {
    api.getProject(this.props.match.params.projectId).then(project => {
      console.log("DEBUG date", project.date);
      this.setState({
        name: project.name,
        projectlink: project.projectlink,
        technologyused: project.technologyused,
        projectimage: project.projectimage,
        description: project.description,
        email: project.email
        // date: project.date.slice(0, 10)
      });
    });
  }
}
