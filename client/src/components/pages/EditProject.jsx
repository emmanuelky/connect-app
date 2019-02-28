import React, { Component } from 'react'
import api from '../../api';

export default class EditProject extends Component {
  constructor(props) {
    super(props)
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
    this.handleClick = this.handleClick.bind(this)
    
  }
  handleInputChange(stateKey, event){
    this.setState({
      [stateKey]: event.target.value
    })
  }

  
  handleSubmit(e){
    e.preventDefault() // To not not submit the form and redirect the user to another page

    api.editProject(this.props.match.params.projects, {
      name: this.state.name,
      projectlink: this.state.projectlink,
      projectimage: this.state.projectimage,
      description: this.state.description,
      technologyused: this.state.technologyused,
      date: this.state.date,
    })
      .then(data => {
        console.log("I could do it", data)
        this.setState({
          message: data.message
        })
        // Remove of the message after 3 seconds
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 3000)
      })
  }
  render() {
    return (
      <div className="editProject">
        <h1>Edit Project</h1>
        <form onSubmit={this.handleSubmit}>
          Project Name: <input type="text" value={this.state.name} onChange={(e) => { this.handleInputChange("name", e) }} /> <br />
          Project Link: <input type="text" value={this.state.projectlink} onChange={(e) => { this.handleInputChange("projectlink", e) }} /> <br />
          Project Image: <input type="text" value={this.state.email} onChange={(e) => { this.handleInputChange("email", e) }} /> <br />
          Description: <input type="text" value={this.state.description} onChange={(e) => { this.handleInputChange("description", e) }} /> <br /> 
          <button>Edit Profile</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    )
  }
}
