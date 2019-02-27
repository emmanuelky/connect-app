import React, { Component } from 'react';
import api from '../../api';


class AddProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      projectlink: "",
      description: "",
      projectimage: "",
      technologyUsed: "",
      message: null,
    }
    this.handleFileChange = this.handleFileChange.bind(this)
  }

  handleFileChange(){
    this.handleFileChange.bind(this)
  }

  handleInputChange(name,event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.name, this.state.description)
    let data = {
      name: this.state.name,
      projectlink: this.state.projectlink,
      description: this.state.description,
      projectimage: this.state.projectimage,
      technologyUsed: this.state.technologyUsed,
    }
    api.addProject(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: "",
          projectlink: "",
          description: "",
          projectimage: "",
          technologyUsed: "",
          message: `Your project '${this.state.name}' has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    return (
      <div className="AddProject">
        <h2>Add Project</h2>
        <form>
          Name: <input type="text" name="name" value={this.state.name} onChange={(e) => { this.handleInputChange("name", e) }} /> <br />
          Project Link: <input type="text" name="projectlink" value={this.state.projectlink} onChange={(e) => { this.handleInputChange("projectlink", e) }} /> <br />
          Description: <textarea value={this.state.description}  name="description" cols="30" rows="10" onChange={(e) => { this.handleInputChange("description", e) }} ></textarea> <br />
          ProjectImage: <input type="file" name="projectimage" onChange={this.state.handleFileChange}/> <br />
          Technology Used: <input type="text" name="technologyUsed" value={this.state.technologyUsed} onChange={(e) => { this.handleInputChange("technologyUsed", e) }} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Create project</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}

      </div>
    );
  }
}
export default AddProject;
