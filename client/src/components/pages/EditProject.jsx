import React, { Component } from 'react'
import api from '../../api';

export default class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      projectlink: "",
      projectimage: "",
      description: "",
      technologyused: "",
      date: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(stateKey, event){
    this.setState({
      [stateKey]: event.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault(); 
    let {
      name,
      projectlink,
      projectimage,
      description,
      technologyused,
      date,
    } = this.state;

    api.editProject(this.props.match.params.projectId, {
      name,
      projectlink,
      projectimage,
      description,
      technologyused,
      date,
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
      <div className="editProject">
        <h1>Edit Project</h1>
        <form onSubmit={this.handleSubmit}>
          Project Name:{" "}
          <input
            type="text"
            value={this.state.name}
            onChange={e => {
              this.handleInputChange("name", e);
            }}
          />{" "}
          <br />
          Project Link:{" "}
          <input
            type="text"
            value={this.state.projectlink}
            onChange={e => {
              this.handleInputChange("projectlink", e);
            }}
          />{" "}
          <br />
          Project Image:{" "}
          <input
            type="text"
            value={this.state.projectimage}
            onChange={e => {
              this.handleInputChange("projectimage", e);
            }}
          />{" "}
          <br />
          Description:{" "}
          <input
            type="text"
            value={this.state.description}
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
          <button>Edit Profile</button>
        </form>
        {this.state.message && <div className="info">{this.state.message}</div>}
      </div>
    );
  }
  //     <div className="editProject">
  //       <h1>Edit Project</h1>
  //       <form onSubmit={this.handleSubmit}>
  //         Project Name: <input type="text" value={this.state.name} onChange={(e) => { this.handleInputChange("name", e) }} /> <br />
  //         Project Link: <input type="text" value={this.state.projectlink} onChange={(e) => { this.handleInputChange("projectlink", e) }} /> <br />
  //         Project Image: <input type="text" value={this.state.email} onChange={(e) => { this.handleInputChange("email", e) }} /> <br />
  //         Description: <input type="text" value={this.state.description} onChange={(e) => { this.handleInputChange("description", e) }} /> <br /> 
  //         <button>Edit Profile</button>
  //       </form>
  //       {this.state.message && <div className="info">
  //         {this.state.message}
  //       </div>}
  //     </div>
  //   )
  // }
  componentDidMount(){
    api.getProject(this.props.match.params.projectId)
      .then(project => {
        this.setState({
          name: project.name,
          projectlink: project.projectlink,
          technologyused: project.technologyused,
          email: project.email,
          date: project.date.slice(0, 10),
          description: project.description,
        })
      })
  }
}
